const articleContent = `Lorem ipsum **dolor sit amet**, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas. Sagittis nisl rhoncus mattis rhoncus urna neque viverra. Integer vitae justo eget magna fermentum. Arcu risus quis varius quam. Viverra nibh cras pulvinar mattis. Ut consequat semper *viverra nam libero* justo laoreet. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Eget egestas purus viverra accumsan in nisl nisi. Orci dapibus ultrices in iaculis nunc sed. Quis vel eros donec ac. Purus ut faucibus pulvinar elementum. Risus in hendrerit gravida rutrum. Leo a diam sollicitudin tempor id. Lobortis feugiat vivamus at augue eget arcu dictum. Sodales neque sodales ut etiam sit amet nisl purus in. Sagittis nisl rhoncus mattis rhoncus urna. Est lorem ipsum dolor sit. Amet purus gravida quis blandit turpis cursus in. Euismod in pellentesque massa placerat duis ultricies.

Cras fermentum *odio eu feugiat* pretium nibh ipsum consequat nisl. Risus nec feugiat in fermentum. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Et netus et malesuada fames ac turpis egestas. Duis tristique sollicitudin nibh sit amet commodo. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. **Facilisi cras** fermentum odio eu feugiat pretium nibh. Id velit ut tortor pretium viverra. Sit amet nisl suscipit adipiscing bibendum est.

> Convallis a cras semper auctor neque vitae tempus quam pellentesque. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Pellentesque habitant morbi tristique senectus et netus et. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Porttitor lacus luctus accumsan tortor. Suscipit adipiscing bibendum est ultricies integer quis auctor. Vel fringilla est ullamcorper eget nulla facilisi etiam. Nisl pretium fusce id velit. In ante metus dictum at tempor commodo. Aliquet bibendum enim facilisis gravida neque.

Risus commodo viverra maecenas accumsan lacus. Non blandit massa enim nec. Tincidunt augue interdum velit euismod. Auctor elit sed vulputate mi sit amet mauris. Faucibus **scelerisque** eleifend donec pretium vulputate sapien nec. Rhoncus aenean vel elit scelerisque. Mi sit amet mauris commodo quis imperdiet massa. Tortor aliquam nulla facilisi cras fermentum odio. Enim nulla aliquet **porttitor** lacus luctus accumsan tortor posuere ac. Purus in mollis nunc sed. Est velit egestas dui id ornare. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Cursus vitae congue mauris rhoncus aenean vel.

Rhoncus urna neque viverra justo. Volutpat sed cras ornare arcu dui. Vitae suscipit tellus mauris a. In nibh mauris cursus mattis molestie. Orci eu lobortis elementum nibh tellus molestie. Venenatis a condimentum vitae sapien pellentesque. Donec ac odio tempor orci. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Phasellus faucibus scelerisque eleifend donec. Massa ultricies mi quis hendrerit dolor magna eget. Orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque in dictum non consectetur a erat. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.`;

export const articles = {
  articles: [
    {
      title: 'Stock market is up',
      author: 'MSNBC',
      content: articleContent
    },
    {
      title: 'Stock market is slightly up',
      author: 'CNN',
      content: articleContent
    },
    {
      title: 'Stock market is going up',
      author: 'Bill Fritz',
      content: articleContent
    },
    {
      title: 'Stock market might be going down',
      author: 'NBC',
      content: articleContent
    },
    {
      title: 'Stock market is fine',
      author: 'Robert Drake',
      content: articleContent
    },
  ]
};

export const stocks = {
  stocks: [
    {
      name: 'Dow Jones Industrial Average',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Dow_Jones_Logo.svg/1200px-Dow_Jones_Logo.svg.png',
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
      image: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062016/untitled-1_79.png?itok=j9w8nuim',
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
      image: 'https://i.pinimg.com/originals/3c/57/82/3c5782eaf1d40d8fcfd56a96b065392b.jpg',
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
