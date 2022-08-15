const weatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1657130400,
      main: {
        temp: 294.44,
        feels_like: 295.08,
        temp_min: 294.22,
        temp_max: 294.44,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 982,
        humidity: 94,
        temp_kf: 0.22,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 1.86,
        deg: 80,
        gust: 3.23,
      },
      visibility: 10000,
      pop: 0.28,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-06 18:00:00",
    },
    {
      dt: 1657141200,
      main: {
        temp: 294.68,
        feels_like: 295.29,
        temp_min: 294.68,
        temp_max: 295.16,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 983,
        humidity: 92,
        temp_kf: -0.48,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 1.69,
        deg: 96,
        gust: 4.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-06 21:00:00",
    },
    {
      dt: 1657152000,
      main: {
        temp: 296.89,
        feels_like: 297.41,
        temp_min: 296.89,
        temp_max: 298.11,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 984,
        humidity: 80,
        temp_kf: -1.22,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 69,
      },
      wind: {
        speed: 2.97,
        deg: 72,
        gust: 4.12,
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-07 00:00:00",
    },
    {
      dt: 1657162800,
      main: {
        temp: 299.84,
        feels_like: 301.23,
        temp_min: 299.84,
        temp_max: 299.84,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 983,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 1.74,
        deg: 71,
        gust: 2.8,
      },
      visibility: 10000,
      pop: 0.4,
      rain: {
        "3h": 0.31,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-07 03:00:00",
    },
    {
      dt: 1657173600,
      main: {
        temp: 299.88,
        feels_like: 301.29,
        temp_min: 299.88,
        temp_max: 299.88,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 69,
      },
      wind: {
        speed: 1.73,
        deg: 50,
        gust: 2.81,
      },
      visibility: 10000,
      pop: 0.44,
      rain: {
        "3h": 0.56,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-07 06:00:00",
    },
    {
      dt: 1657184400,
      main: {
        temp: 297.52,
        feels_like: 298.02,
        temp_min: 297.52,
        temp_max: 297.52,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 982,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 1.17,
        deg: 87,
        gust: 2.93,
      },
      visibility: 10000,
      pop: 0.56,
      rain: {
        "3h": 0.44,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-07 09:00:00",
    },
    {
      dt: 1657195200,
      main: {
        temp: 295.95,
        feels_like: 296.43,
        temp_min: 295.95,
        temp_max: 295.95,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 984,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 1.97,
        deg: 64,
        gust: 4.2,
      },
      visibility: 10000,
      pop: 0.48,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-07 12:00:00",
    },
    {
      dt: 1657206000,
      main: {
        temp: 294.08,
        feels_like: 294.63,
        temp_min: 294.08,
        temp_max: 294.08,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 983,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 1.41,
        deg: 86,
        gust: 1.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-07 15:00:00",
    },
    {
      dt: 1657216800,
      main: {
        temp: 293.49,
        feels_like: 294.03,
        temp_min: 293.49,
        temp_max: 293.49,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 1.14,
        deg: 83,
        gust: 1.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-07 18:00:00",
    },
    {
      dt: 1657227600,
      main: {
        temp: 294.88,
        feels_like: 295.41,
        temp_min: 294.88,
        temp_max: 294.88,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.35,
        deg: 24,
        gust: 0.8,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-07 21:00:00",
    },
    {
      dt: 1657238400,
      main: {
        temp: 297.8,
        feels_like: 298.28,
        temp_min: 297.8,
        temp_max: 297.8,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.19,
        deg: 70,
        gust: 2.6,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-08 00:00:00",
    },
    {
      dt: 1657249200,
      main: {
        temp: 300.83,
        feels_like: 302.14,
        temp_min: 300.83,
        temp_max: 300.83,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 980,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.01,
        deg: 69,
        gust: 2.31,
      },
      visibility: 10000,
      pop: 0.24,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-08 03:00:00",
    },
    {
      dt: 1657260000,
      main: {
        temp: 300.24,
        feels_like: 301.66,
        temp_min: 300.24,
        temp_max: 300.24,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 979,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.94,
        deg: 343,
        gust: 1.71,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        "3h": 0.31,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-08 06:00:00",
    },
    {
      dt: 1657270800,
      main: {
        temp: 297.47,
        feels_like: 297.92,
        temp_min: 297.47,
        temp_max: 297.47,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 980,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.54,
        deg: 72,
        gust: 4.2,
      },
      visibility: 10000,
      pop: 0.6,
      rain: {
        "3h": 0.56,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-08 09:00:00",
    },
    {
      dt: 1657281600,
      main: {
        temp: 295.04,
        feels_like: 295.58,
        temp_min: 295.04,
        temp_max: 295.04,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 981,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.39,
        deg: 68,
        gust: 4.92,
      },
      visibility: 10000,
      pop: 0.6,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-08 12:00:00",
    },
    {
      dt: 1657292400,
      main: {
        temp: 294.14,
        feels_like: 294.72,
        temp_min: 294.14,
        temp_max: 294.14,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 980,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.12,
        deg: 77,
        gust: 2.25,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-08 15:00:00",
    },
    {
      dt: 1657303200,
      main: {
        temp: 293.59,
        feels_like: 294.12,
        temp_min: 293.59,
        temp_max: 293.59,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 978,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.61,
        deg: 194,
        gust: 0.72,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-08 18:00:00",
    },
    {
      dt: 1657314000,
      main: {
        temp: 295.06,
        feels_like: 295.58,
        temp_min: 295.06,
        temp_max: 295.06,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 979,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.34,
        deg: 106,
        gust: 0.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-08 21:00:00",
    },
    {
      dt: 1657324800,
      main: {
        temp: 296.78,
        feels_like: 297.24,
        temp_min: 296.78,
        temp_max: 296.78,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 979,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.28,
        deg: 261,
        gust: 2.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-09 00:00:00",
    },
    {
      dt: 1657335600,
      main: {
        temp: 299.07,
        feels_like: 299.6,
        temp_min: 299.07,
        temp_max: 299.07,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 978,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.75,
        deg: 276,
        gust: 4.21,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        "3h": 0.31,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-09 03:00:00",
    },
    {
      dt: 1657346400,
      main: {
        temp: 299.17,
        feels_like: 299.17,
        temp_min: 299.17,
        temp_max: 299.17,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 977,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.57,
        deg: 268,
        gust: 7.21,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        "3h": 0.31,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-09 06:00:00",
    },
    {
      dt: 1657357200,
      main: {
        temp: 297.2,
        feels_like: 297.83,
        temp_min: 297.2,
        temp_max: 297.2,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 978,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.33,
        deg: 255,
        gust: 7.11,
      },
      visibility: 10000,
      pop: 0.24,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-09 09:00:00",
    },
    {
      dt: 1657368000,
      main: {
        temp: 295.05,
        feels_like: 295.72,
        temp_min: 295.05,
        temp_max: 295.05,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 979,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.82,
        deg: 259,
        gust: 5.3,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-09 12:00:00",
    },
    {
      dt: 1657378800,
      main: {
        temp: 294.87,
        feels_like: 295.58,
        temp_min: 294.87,
        temp_max: 294.87,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 979,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.4,
        deg: 264,
        gust: 4.33,
      },
      visibility: 10000,
      pop: 0.16,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-09 15:00:00",
    },
    {
      dt: 1657389600,
      main: {
        temp: 294.74,
        feels_like: 295.49,
        temp_min: 294.74,
        temp_max: 294.74,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 979,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.96,
        deg: 261,
        gust: 2.51,
      },
      visibility: 9249,
      pop: 0.32,
      rain: {
        "3h": 0.63,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-09 18:00:00",
    },
    {
      dt: 1657400400,
      main: {
        temp: 295.36,
        feels_like: 296.14,
        temp_min: 295.36,
        temp_max: 295.36,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 980,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.63,
        deg: 254,
        gust: 2.32,
      },
      visibility: 10000,
      pop: 0.56,
      rain: {
        "3h": 2.69,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-09 21:00:00",
    },
    {
      dt: 1657411200,
      main: {
        temp: 295.24,
        feels_like: 295.96,
        temp_min: 295.24,
        temp_max: 295.24,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 981,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.71,
        deg: 269,
        gust: 2.2,
      },
      visibility: 10000,
      pop: 0.72,
      rain: {
        "3h": 0.75,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-10 00:00:00",
    },
    {
      dt: 1657422000,
      main: {
        temp: 295.86,
        feels_like: 296.59,
        temp_min: 295.86,
        temp_max: 295.86,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 981,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.32,
        deg: 270,
        gust: 3.51,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-10 03:00:00",
    },
    {
      dt: 1657432800,
      main: {
        temp: 296.98,
        feels_like: 297.66,
        temp_min: 296.98,
        temp_max: 296.98,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 980,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.35,
        deg: 264,
        gust: 3.61,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-10 06:00:00",
    },
    {
      dt: 1657443600,
      main: {
        temp: 297.88,
        feels_like: 298.52,
        temp_min: 297.88,
        temp_max: 297.88,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 980,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.55,
        deg: 273,
        gust: 3.81,
      },
      visibility: 10000,
      pop: 0.16,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-10 09:00:00",
    },
    {
      dt: 1657454400,
      main: {
        temp: 294.7,
        feels_like: 295.42,
        temp_min: 294.7,
        temp_max: 294.7,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 2.28,
        deg: 262,
        gust: 2.72,
      },
      visibility: 10000,
      pop: 0.16,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-10 12:00:00",
    },
    {
      dt: 1657465200,
      main: {
        temp: 294.44,
        feels_like: 295.18,
        temp_min: 294.44,
        temp_max: 294.44,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 982,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 2.06,
        deg: 269,
        gust: 2.33,
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-10 15:00:00",
    },
    {
      dt: 1657476000,
      main: {
        temp: 294.76,
        feels_like: 295.54,
        temp_min: 294.76,
        temp_max: 294.76,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 981,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 1.8,
        deg: 275,
        gust: 2.23,
      },
      visibility: 5995,
      pop: 0.08,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-10 18:00:00",
    },
    {
      dt: 1657486800,
      main: {
        temp: 295.77,
        feels_like: 296.54,
        temp_min: 295.77,
        temp_max: 295.77,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 0.86,
        deg: 283,
        gust: 1.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-10 21:00:00",
    },
    {
      dt: 1657497600,
      main: {
        temp: 300.76,
        feels_like: 302.86,
        temp_min: 300.76,
        temp_max: 300.76,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 983,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 0.83,
        deg: 89,
        gust: 0.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-11 00:00:00",
    },
    {
      dt: 1657508400,
      main: {
        temp: 302.01,
        feels_like: 304.72,
        temp_min: 302.01,
        temp_max: 302.01,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 62,
      },
      wind: {
        speed: 1.31,
        deg: 70,
        gust: 1.4,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-11 03:00:00",
    },
    {
      dt: 1657519200,
      main: {
        temp: 299.87,
        feels_like: 302.2,
        temp_min: 299.87,
        temp_max: 299.87,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 982,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 0.24,
        deg: 4,
        gust: 1.52,
      },
      visibility: 10000,
      pop: 0.36,
      rain: {
        "3h": 0.44,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-11 06:00:00",
    },
    {
      dt: 1657530000,
      main: {
        temp: 298.47,
        feels_like: 299.2,
        temp_min: 298.47,
        temp_max: 298.47,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 982,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 2.38,
        deg: 294,
        gust: 3.32,
      },
      visibility: 10000,
      pop: 0.24,
      rain: {
        "3h": 0.25,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-11 09:00:00",
    },
    {
      dt: 1657540800,
      main: {
        temp: 296.25,
        feels_like: 296.89,
        temp_min: 296.25,
        temp_max: 296.25,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 983,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 0.68,
        deg: 312,
        gust: 0.81,
      },
      visibility: 10000,
      pop: 0.28,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-11 12:00:00",
    },
    {
      dt: 1657551600,
      main: {
        temp: 296.04,
        feels_like: 296.68,
        temp_min: 296.04,
        temp_max: 296.04,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 982,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.54,
        deg: 319,
        gust: 0.6,
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-11 15:00:00",
    },
  ],
  city: {
    id: 1851632,
    name: "Shuzenji",
    coord: {
      lat: 35,
      lon: 139,
    },
    country: "JP",
    population: 0,
    timezone: 32400,
    sunrise: 1657136168,
    sunset: 1657188068,
  },
};

export default weatherData;
