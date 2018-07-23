export const articles = {
  articles: [
    {
      title: 'Stock market is up',
      author: 'MSNBC',
      content: 'content'
    },
    {
      title: 'Stock market is slightly up',
      author: 'CNN',
      content: 'content'
    },
    {
      title: 'Stock market is going up',
      author: 'Bill Fritz',
      content: 'content'
    },
    {
      title: 'Stock market might be going down',
      author: 'NBC',
      content: 'content'
    },
    {
      title: 'Stock market is fine',
      author: 'Robert Drake',
      content: 'content'
    },
  ]
};

export const stocks = {
  stocks: [
    {
      name: 'Dow Jones Industrial Average',
      symbol: 'DJI',
      value: 25058.12,
      isUp: false,
      valueChange: 6.38,
      percentChange: 0.025,
      values: [
        {
          time: '9:30',
          value: 25041.14
        },
        {
          time: '10:00',
          value: 25059.57
        },
        {
          time: '11:00',
          value: 25082.61
        },
        {
          time: '12:00',
          value: 25098.40
        },
        {
          time: '1:00',
          value: 25095.71
        },
        {
          time: '2:00',
          value: 25082.62
        },
        {
          time: '3:00',
          value: 25073.04
        },
        {
          time: '4:00',
          value: 25057.00
        }
      ]
    },
    {
      name: 'Nasdaq Composite',
      symbol: 'IXIC',
      value: 7820.20,
      isUp: false,
      valueChange: 5.10,
      percentChange: 0.065,
      values: [
        {
          time: '9:30',
          value: 7843.08
        },
        {
          time: '10:00',
          value: 7845.95
        },
        {
          time: '11:00',
          value: 7853.47
        },
        {
          time: '12:00',
          value: 7845.57
        },
        {
          time: '1:00',
          value: 7840.32
        },
        {
          time: '2:00',
          value: 7839.10
        },
        {
          time: '3:00',
          value: 7826.98
        },
        {
          time: '4:00',
          value: 7819.33
        }
      ]
    },
    {
      name: 'S&P 500 Index',
      symbol: 'INX',
      value: 2801.83,
      isUp: false,
      valueChange: 2.66,
      percentChange: 0.095,
      values: [
        {
          time: '9:30',
          value: 2804.55
        },
        {
          time: '10:00',
          value: 2805.35
        },
        {
          time: '11:00',
          value: 2806.07
        },
        {
          time: '12:00',
          value: 2806.88
        },
        {
          time: '1:00',
          value: 2806.22
        },
        {
          time: '2:00',
          value: 2805.87
        },
        {
          time: '3:00',
          value: 2803.71
        },
        {
          time: '4:00',
          value: 2802.01
        }
      ]
    }
  ]
};

export const stockData = [
  [
    {
      "name": "DJI",
      "series": [
        {
          "name": "9:30",
          "value": 25041.14
        },
        {
          "name": "10:00",
          "value": 25059.57
        },
        {
          "name": "11:00",
          "value": 25082.61
        },
        {
          "name": "12:00",
          "value": 25098.4
        },
        {
          "name": "1:00",
          "value": 25095.71
        },
        {
          "name": "2:00",
          "value": 25082.62
        },
        {
          "name": "3:00",
          "value": 25073.04
        },
        {
          "name": "4:00",
          "value": 25057
        }
      ],
      "min": 25031.14,
      "max": 25108.4
    }
  ],
  [
    {
      "name": "IXIC",
      "series": [
        {
          "name": "9:30",
          "value": 7843.08
        },
        {
          "name": "10:00",
          "value": 7845.95
        },
        {
          "name": "11:00",
          "value": 7853.47
        },
        {
          "name": "12:00",
          "value": 7845.57
        },
        {
          "name": "1:00",
          "value": 7840.32
        },
        {
          "name": "2:00",
          "value": 7839.1
        },
        {
          "name": "3:00",
          "value": 7826.98
        },
        {
          "name": "4:00",
          "value": 7819.33
        }
      ],
      "min": 7809.33,
      "max": 7863.47
    }
  ],
  [
    {
      "name": "INX",
      "series": [
        {
          "name": "9:30",
          "value": 2804.55
        },
        {
          "name": "10:00",
          "value": 2805.35
        },
        {
          "name": "11:00",
          "value": 2806.07
        },
        {
          "name": "12:00",
          "value": 2806.88
        },
        {
          "name": "1:00",
          "value": 2806.22
        },
        {
          "name": "2:00",
          "value": 2805.87
        },
        {
          "name": "3:00",
          "value": 2803.71
        },
        {
          "name": "4:00",
          "value": 2802.01
        }
      ],
      "min": 2792.01,
      "max": 2816.88
    }
  ]
];
