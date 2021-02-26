define({ "api": [
  {
    "name": "3_Get_troubles_list",
    "group": "Trouble",
    "type": "get",
    "url": "/api/workout/get-trouble-list/",
    "title": "3 Get troubles list",
    "sampleRequest": [
      {
        "url": "http://apidoc.maximusapp.com"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "workout_id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"results\": [\n        {\n            \"id\": 2,\n            \"name\": \"котик вернулся на коленки\",\n            \"image\": \"http://maximusapp.com/media/kotik_6d69TZ3.jpg\"\n        },\n        {\n            \"id\": 3,\n            \"name\": \"котик еще не на коленках\",\n            \"image\": \"http://maximusapp.com/media/ghrweherherh_dtDHOan.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/trouble.py",
    "groupTitle": "Trouble"
  },
  {
    "name": "1.1_CreateUserProfile",
    "group": "User",
    "type": "get",
    "url": "/api/user/create-profile/",
    "title": "1.1 CreateUserProfile",
    "sampleRequest": [
      {
        "url": "http://apidoc.maximusapp.com"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "first_name",
            "description": "<p>First user name</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last user name</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>Image ( send image file )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/user.py",
    "groupTitle": "User"
  },
  {
    "name": "1.2_UpdateUserProfile",
    "group": "User",
    "type": "get",
    "url": "/api/user/update-profile/{user_id}",
    "title": "1.2 UpdateUserProfile",
    "sampleRequest": [
      {
        "url": "http://apidoc.maximusapp.com"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id-User.</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "first_name",
            "description": "<p>First user name</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last user name</p>"
          },
          {
            "group": "Parameter",
            "type": "str",
            "optional": false,
            "field": "image",
            "description": "<p>Image ( send image file )</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "first_name",
            "description": "<p>First user name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last user name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user_id\": 1,\n    \"image\": \"http://maximusapp.com/media/YFDNcvTLEhqx.jpg\",\n    \"first_name\": \"admin\",\n    \"last_name\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/user.py",
    "groupTitle": "User"
  },
  {
    "name": "1._GetUserProfile",
    "group": "User",
    "type": "get",
    "url": "/api/user/profile/{user_id}",
    "title": "1. GetUserProfile",
    "sampleRequest": [
      {
        "url": "http://apidoc.maximusapp.com"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id-User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "first_name",
            "description": "<p>First user name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last user name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"image\": \"http://maximusapp.com/media/YFDNcvTLEhqx.jpg\",\n    \"first_name\": \"admin\",\n    \"last_name\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/user.py",
    "groupTitle": "User"
  },
  {
    "name": "2.1_Get_workout_filtered_list",
    "group": "Workout",
    "type": "get",
    "url": "/api/workout/get-workout-filtered-list/",
    "title": "2.1 Get workout filtered list",
    "sampleRequest": [
      {
        "url": "http://apidoc.maximusapp.com"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Sex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Peridoicity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Level",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Objects",
            "optional": false,
            "field": "Trouble",
            "description": "<p>id's array</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "workout_id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"results\": [\n        {\n            \"id\": 4,\n            \"name\": \"t\",\n            \"image\": \"http://maximusapp.com/media/kotik_LFuK6N5.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout"
  },
  {
    "name": "2_Get_workout",
    "group": "Workout",
    "type": "get",
    "url": "/api/workout/get-workout/{workout_id}/",
    "title": "2 Get workout",
    "sampleRequest": [
      {
        "url": "http://apidoc.maximusapp.com"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workout_id",
            "description": "<p>Id-Workout.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "workout_id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "video",
            "description": "<p>video</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "duration",
            "description": "<p>duration</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "periodicity",
            "description": "<p>Workout periodicity</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "level",
            "description": "<p>Workout difficulty level</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "value",
            "description": "<p>value</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "sex",
            "description": "<p>Sex</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          },
          {
            "group": "Success 200",
            "type": "objects",
            "optional": false,
            "field": "troubles",
            "description": "<p>Troubles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"workout_id\": 4,\n    \"name\": \"t\",\n    \"video\": \"http://maximusapp.com/media/Kitten_Zoom_Filter_Mishap_VEC0LdZ.mp4\",\n    \"duration\": \"t\",\n    \"periodicity\": \"4\",\n    \"level\": \"Средний\",\n    \"description\": \"t\",\n    \"value\": \"t\",\n    \"image\": \"http://maximusapp.com/media/kotik_LFuK6N5.jpg\",\n    \"sex\": \"M\",\n    \"troubles\": [\n        {\n            \"id\": 3,\n            \"name\": \"котик еще не на коленках\",\n            \"image\": \"http://maximusapp.com/media/Без_названия_dtDHOan.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout"
  }
] });
