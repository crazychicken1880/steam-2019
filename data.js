var utils = require("./common")

var data = {
  boys:{
    6:{
      free:{
        bronze:32.00,
        silver:25.00,
        gold  :20.89, 
      },
      breast:{
        bronze:40.00,
        silver:34.00,
        gold  :29.74,
      },
      back:{
        bronze:38.00,
        silver:33.00,
        gold  :26.24,
      },
      fly:{
        bronze:39.00,
        silver:32.00,
        gold  :26.45,
      },
    },
    8:{
      free:{
        bronze:22.00,
        silver:18.50,
        gold  :16.42,
      },
      breast:{
        bronze:29.00,
        silver:26.00,
        gold  :22.82,
      },
      back:{
        bronze:27.50,
        silver:24.00,
        gold  :20.65,
      },
      fly:{
        bronze:26.50,
        silver:23.00,
        gold  :18.58,
      },
      im:{
        bronze:utils.time_to_seconds("2:10.00"),
        silver:utils.time_to_seconds("1:55.00"),
        gold  :utils.time_to_seconds("1:39.90"),
      },
    },
    10:{
      free:{
        bronze:41.00,
        silver:37.00,
        gold  :31.60,
      },
      breast:{
        bronze:52.00,
        silver:48.00,
        gold  :42.30,
      },
      back:{
        bronze:49.00,
        silver:44.00,
        gold  :38.53,
      },
      fly:{
        bronze:48.00,
        silver:43.00,
        gold  :37.08,
      },
      im:{
        bronze:utils.time_to_seconds("1:45.00"),
        silver:utils.time_to_seconds("1:35.00"),
        gold  :utils.time_to_seconds("1:24.57"),
      }
    },
    12:{
        free:{
          bronze:35.50,
          silver:32.50,
          gold  :28.48,
        },
        breast:{
          bronze:46.00,
          silver:42.00,
          gold  :37.45,
        },
        back:{
          bronze:43.00,
          silver:39.50,
          gold  :34.82,
        },
        fly:{
          bronze:42.00,
          silver:38.00,
          gold  :32.56,
        },
        im:{
          bronze:utils.time_to_seconds("1:33.00"),
          silver:utils.time_to_seconds("1:24.00"),
          gold  :utils.time_to_seconds("1:14.83"),
        }
      },
      14:{
        free:{
          bronze:31.00,
          silver:28.50,
          gold  :25.88,
        },
        breast:{
          bronze:41.00,
          silver:37.50,
          gold  :33.49,
        },
        back:{
          bronze:39.00,
          silver:35.50,
          gold  :31.69,
        },
        fly:{
          bronze:37.50,
          silver:33.50,
          gold  :28.99,
        },
        im:{
          bronze:utils.time_to_seconds("1:22.00"),
          silver:utils.time_to_seconds("1:15.00"),
          gold  :utils.time_to_seconds("1:07.73"),
        }
      },
      18:{
         50:{ 
            free:{
                bronze:29.00,
                silver:27.00,
                gold  :23.99,
            },
            breast:{
                bronze:38.50,
                silver:36.00,
                gold  :31.39,
            },
             back:{
                bronze:36.00,
                silver:33.00,
                gold  :29.10,
            },
            fly:{
                bronze:33.00,
                silver:29.50,
                gold  :26.75,
         },
        },
        100:{ 
            free:{
                bronze:utils.time_to_seconds('1:04.00'),
                silver:59.00,
                gold  :53.07,
            },
            breast:{
                bronze:utils.time_to_seconds('1:23.00'),
                silver:utils.time_to_seconds('1:17.00'),
                gold  :utils.time_to_seconds('1:09.47'),
            },
             back:{
                bronze:utils.time_to_seconds('1:19.00'),
                silver:utils.time_to_seconds('1:13.00'),
                gold  :utils.time_to_seconds('1:04.15'),
            },
            fly:{
                bronze:utils.time_to_seconds('1:14.00'),
                silver:utils.time_to_seconds('1:09.00'),
                gold  :utils.time_to_seconds('1:01.14'),
            },
            im:{
                bronze:utils.time_to_seconds("1:15.00"),
                silver:utils.time_to_seconds("1:09.00"),
                gold  :utils.time_to_seconds("1:01.73"),
              }
        },
      },
      girls:{
        6:{
          free:{
            bronze:32.00,
            silver:25.00,
            gold  :20.88, 
          },
          breast:{
            bronze:40.00,
            silver:34.00,
            gold  :29.91,
          },
          back:{
            bronze:38.00,
            silver:32.00,
            gold  :25.95,
          },
          fly:{
            bronze:38.00,
            silver:31.00,
            gold  :25.37,
          },
        },
        8:{
          free:{
            bronze:22.00,
            silver:19.00,
            gold  :16.44,
          },
          breast:{
            bronze:29.00,
            silver:26.00,
            gold  :22.61,
          },
          back:{
            bronze:27.50,
            silver:24.00,
            gold  :20.69,
          },
          fly:{
            bronze:26.00,
            silver:23.00,
            gold  :18.18,
          },
          im:{
            bronze:utils.time_to_seconds("2:10.00"),
            silver:utils.time_to_seconds("1:55.00"),
            gold  :utils.time_to_seconds("1:39.74"),
          },
        },
        10:{
          free:{
            bronze:41.00,
            silver:37.00,
            gold  :31.88,
          },
          breast:{
            bronze:52.50,
            silver:49.00,
            gold  :41.88,
          },
          back:{
            bronze:49.00,
            silver:44.00,
            gold  :38.33,
          },
          fly:{
            bronze:48.00,
            silver:43.00,
            gold  :36.60,
          },
          im:{
            bronze:utils.time_to_seconds("1:45.00"),
            silver:utils.time_to_seconds("1:35.00"),
            gold  :utils.time_to_seconds("1:23.80"),
          }
        },
        12:{
            free:{
              bronze:36.00,
              silver:33.00,
              gold  :28.97,
            },
            breast:{
              bronze:46.50,
              silver:42.50,
              gold  :37.91,
            },
            back:{
              bronze:43.00,
              silver:40.00,
              gold  :34.13,
            },
            fly:{
              bronze:42.00,
              silver:38.00,
              gold  :32.03,
            },
            im:{
              bronze:utils.time_to_seconds("1:35.00"),
              silver:utils.time_to_seconds("1:26.00"),
              gold  :utils.time_to_seconds("1:15.34"),
            }
          },
          14:{
            free:{
              bronze:34.00,
              silver:30.50,
              gold  :27.78,
            },
            breast:{
              bronze:43.00,
              silver:39.50,
              gold  :36.23,
            },
            back:{
              bronze:41.00,
              silver:37.50,
              gold  :32.57,
            },
            fly:{
              bronze:39.00,
              silver:34.50,
              gold  :30.62,
            },
            im:{
              bronze:utils.time_to_seconds("1:26.00"),
              silver:utils.time_to_seconds("1:19.50"),
              gold  :utils.time_to_seconds("1:11.87"),
            }
          },
          18:{
             50:{ 
                free:{
                    bronze:32.50,
                    silver:30.50,
                    gold  :26.99,
                },
                breast:{
                    bronze:42.00,
                    silver:39.00,
                    gold  :34.99,
                },
                 back:{
                    bronze:40.00,
                    silver:37.00,
                    gold  :31.50,
                },
                fly:{
                    bronze:39.00,
                    silver:34.50,
                    gold  :30.25,
             },
            },
            100:{ 
                free:{
                    bronze:utils.time_to_seconds('1:12.00'),
                    silver:utils.time_to_seconds('1:08.00'),
                    gold  :59.43,
                },
                breast:{
                    bronze:utils.time_to_seconds('1:34.00'),
                    silver:utils.time_to_seconds('1:27.00'),
                    gold  :utils.time_to_seconds('1:17.97'),
                },
                 back:{
                    bronze:utils.time_to_seconds('1:26.00'),
                    silver:utils.time_to_seconds('1:19.00'),
                    gold  :utils.time_to_seconds('1:10.13'),
                },
                fly:{
                    bronze:utils.time_to_seconds('1:24.00'),
                    silver:utils.time_to_seconds('1:17.00'),
                    gold  :utils.time_to_seconds('1:08.39'),
                },
                im:{
                    bronze:utils.time_to_seconds("1:23.00"),
                    silver:utils.time_to_seconds("1:16.00"),
                    gold  :utils.time_to_seconds("1:09.41"),
                  }
            },
          },
        }
  }
}

module.exports = {
  load: function(){
    return data
  } 
}

