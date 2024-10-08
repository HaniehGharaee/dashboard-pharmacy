#!/bin/bash

# Configuration
REGISTRY_URL="192.168.47.200:5000"
PROJECT_NAME="pic/documentation-front"
LOG_FILE="deploy.log"
# Fetch the current version from git tags
VERSION=$(git describe --abbrev=0)
VITE_API_URL="https://docs.inhs.ir/api"
# Function to log messages with timestamp
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a ${LOG_FILE}
}

# Add a separator line in the log file
log_separator() {
    echo "---------------------------------------------------" | tee -a ${LOG_FILE}
}

# Check if VERSION is fetched correctly
if [ -z "$VERSION" ]; then
    log "Error: Unable to fetch version from git."
    exit 1
fi

# Log separator for a new deployment session
log_separator
log "Starting deployment of ${PROJECT_NAME} version ${VERSION}"

# Build the Docker image
IMAGE_NAME="${REGISTRY_URL}/${PROJECT_NAME}:${VERSION}"
log "Building Docker image ${IMAGE_NAME}"
if docker build --build-arg VITE_API_URL=${VITE_API_URL} -t ${IMAGE_NAME} .; then
    log "Docker image ${IMAGE_NAME} built successfully."
else
    log "Error: Failed to build Docker image."
    exit 1
fi

# Push the Docker image
log "Pushing Docker image ${IMAGE_NAME} to registry..."
if docker push ${IMAGE_NAME}; then
    log "Docker image ${IMAGE_NAME} pushed successfully."
else
    log "Error: Failed to push Docker image."
    exit 1
fi

log "Deployment of ${PROJECT_NAME} version ${VERSION} completed successfully."
log_separator
