
const minSize = {
    axisLine_width: 10,
    splitLine_length: 0,
    axisLabel_fontSize: 0,
    detail_fontSize: 12,
};

const customStyle = {
    fontSize: 14,
    // fontWeight: 'bold',
    fontFamily: 'YekanBakh-Medium',
    fontColor: '#333333',
};
const colorList = [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc',

    // '#dd6b66',
    // '#759aa0',
    // '#e69d87',
    // '#8dc1a9',
    // '#ea7e53',
    // '#eedd78',
    // '#73a373',
    // '#73b9bc',
    // '#7289ab',
    // '#91ca8c',
    // '#f49f42',
];

const titleOption = (title, subtext, isMinimal = false) =>
    title
        ? {
              text: title,
              subtext,
              left: 'center',
              // top: "bottom",
              // bottom: -5,
              textStyle: {
                  color: customStyle.fontColor,
                  fontSize: isMinimal
                      ? minSize?.detail_fontSize
                      : customStyle.fontSize,
                  fontWeight: 'bold',
                  fontFamily: customStyle.fontFamily,
              },
          }
        : null;

export const BarOptions = ({ title = null, data = [] }) => {
    const labelOption = {
        show: false,
        rotate: 30,
        formatter: '{b}', //{b} | {c}
        fontSize: 10,
        position: 'bottom',
        fontFamily: customStyle.fontFamily,
        distance: 10,
        rich: {
            name: {},
        },
    };
    return {
        title: titleOption(title),
        color: colorList,
        // grid: {
        //   bottom: 100,
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        xAxis: {
            type: 'category',
            // axisTick: {
            //   alignWithLabel: true,
            // },
            axisLabel: {
                interval: 0,
                rotate: 55,
                width: 120,
                overflow: 'truncate',
                ellipsis: '...',
                // margin: 8,
                color: '#333', // Example of moving textStyle properties directly to axisLabel
                fontSize: 10,
                fontWeight: 'bold',
            },
            // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            data: data?.map((item) => item.name),
        },
        yAxis: {
            type: 'value',
        },
        // toolbox: toolbox,
        series: [
            {
                data: data?.map((item) => item.value),
                type: 'bar',
                label: labelOption,
            },
        ],
    };
};