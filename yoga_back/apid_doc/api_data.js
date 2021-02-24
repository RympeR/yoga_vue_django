define({ "api": [
  {
    "name": "3.2_Get_troubles_list",
    "group": "Troubles",
    "type": "GET",
    "url": "/api/workout/get-trouble-list/",
    "title": "3.2 Get trouble list",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"results\": [\n        {\n            \"id\": 2,\n            \"name\": \"котик вернулся на коленки\",\n            \"image\": \"http://127.0.0.1:8000/media/kotik_6d69TZ3.jpg\"\n        },\n        {\n            \"id\": 3,\n            \"name\": \"котик еще не на коленках\",\n            \"image\": \"http://127.0.0.1:8000/media/ghrweherherh_dtDHOan.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Troubles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "3.3_Create_trouble",
    "group": "Troubles",
    "type": "POST",
    "url": "/api/workout/create-trouble/",
    "title": "3.3 Create trouble",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trouble_id",
            "description": "<p>Trouble id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Trouble image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Trouble name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"trouble_id\": 4,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Troubles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "3.4_Update_trouble",
    "group": "Troubles",
    "type": "PUT",
    "url": "/api/workout/update-trouble/{trouble_id}/",
    "title": "3.4 Update trouble",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trouble_id",
            "description": "<p>Trouble id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Trouble image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Trouble name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"trouble_id\": 4,\n    \"name\": \"test\",\n    \"image\": \"http://127.0.0.1:8000/media/kotik_LFuK6N5.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Troubles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "3.5_Delete_trouble",
    "group": "Troubles",
    "type": "DELETE",
    "url": "/api/workout/delete-trouble/{trouble_id}/",
    "title": "3.5 Delete trouble",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trouble_id",
            "description": "<p>Trouble id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"trouble_id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Troubles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "3_Get_trouble",
    "group": "Troubles",
    "type": "GET",
    "url": "/api/workout/get-trouble/{trouble_id}/",
    "title": "3 Get trouble",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "trouble_id",
            "description": "<p>Trouble id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\n        \"id\": 2,\n        \"name\": \"котик вернулся на коленки\",\n        \"image\": \"http://127.0.0.1:8000/media/kotik_6d69TZ3.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Troubles",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "1.1_Profile",
    "group": "User",
    "type": "GET",
    "url": "/api/user/profile/{user_id}",
    "title": "1.1 Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>UserId</p>"
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
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "image",
            "description": "<p>image</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"image\": \"http://127.0.0.1:8000/media/user/YFDNcvTLEhqx.jpg\",\n    \"first_name\": \"admin\",\n    \"last_name\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/example.py",
    "groupTitle": "User"
  },
  {
    "name": "1.2_Update_Profile",
    "group": "User",
    "type": "PUT",
    "url": "/api/user/update_profile/{user_id}",
    "title": "1.2 Update Profile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>UserId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p>"
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
            "field": "image",
            "description": "<p>image</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user_id\": 1,\n    \"image\": \"http://127.0.0.1:8000/media/user/YFDNcvTLEhqx.jpg\",\n    \"first_name\": \"admin\",\n    \"last_name\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/example.py",
    "groupTitle": "User"
  },
  {
    "name": "1._Create_user",
    "group": "User",
    "type": "POST",
    "url": "/api/user/create_user/",
    "title": "1. Create user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First-name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last-name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Profile image</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400\n{\n    \"non_field_errors\": [\n        \"Unable to create user with provided credentials.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/example.py",
    "groupTitle": "User"
  },
  {
    "name": "2.1_Workout_List",
    "group": "Workout",
    "type": "GET",
    "url": "/api/workout/get-workout-list/",
    "title": "2.1 Workout List",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "image",
            "description": "<p>Image-Workout</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n    \"results\": [\n        {\n            \"id\": 4,\n            \"name\": \"t\",\n            \"video\": \"http://127.0.0.1:8000/media/Kitten_Zoom_Filter_Mishap_VEC0LdZ.mp4\",\n            \"duration\": \"t\",\n            \"periodicity\": \"4\",\n            \"level\": \"Средний\",\n            \"image\": \"http://127.0.0.1:8000/media/kotik_LFuK6N5.jpg\",\n            \"description\": \"t\",\n            \"value\": \"t\",\n            \"sex\": \"M\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "2.2_Create_workout",
    "group": "Workout",
    "type": "POST",
    "url": "/api/workout/create-workout/",
    "title": "2.2 Create workout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "periodicity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "troubles",
            "description": ""
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
            "field": "id",
            "description": "<p>ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout"
  },
  {
    "name": "2.3_Update_workout",
    "group": "Workout",
    "type": "POST",
    "url": "/api/workout/update-workout/",
    "title": "2.3 Update workout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "periodicity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": ""
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
            "description": "<p>Video</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "periodicity",
            "description": "<p>Periodicity</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "level",
            "description": "<p>Level</p>"
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
            "description": "<p>Value</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout"
  },
  {
    "name": "2.4_Get_Workout_Filtered_List",
    "group": "Workout",
    "type": "GET",
    "url": "/api/workout/get-workout-filtered-list/",
    "title": "2.4 Get Workout Filtered List",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>Sex</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "peridoicity",
            "description": "<p>Peridoicity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>Level</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "troubles",
            "description": "<p>Trouble id's array</p>"
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"results\": [\n        {\n            \"id\": 4,\n            \"name\": \"t\",\n            \"image\": \"http://127.0.0.1:8000/media/kotik_LFuK6N5.jpg\"\n        }\n    ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "2.5_Get_Workout_List",
    "group": "Workout",
    "type": "GET",
    "url": "/api/workout/get-workout-list/",
    "title": "2.5 Get Workout List",
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"results\": [\n        {\n            \"id\": 4,\n            \"name\": \"t\",\n            \"image\": \"http://127.0.0.1:8000/media/kotik_LFuK6N5.jpg\"\n        }\n    ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "2.6_Delete_workout",
    "group": "Workout",
    "type": "DELETE",
    "url": "/api/workout/delete-workout/{workout_id}/",
    "title": "2.5 Delete workout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workout_id",
            "description": "<p>Workout id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"workout_id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "name": "2._Workout",
    "group": "Workout",
    "type": "GET",
    "url": "/api/workout/get-workout/{workout_id}/",
    "title": "2. Get Workout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workout_id",
            "description": "<p>Id-Workout</p>"
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
            "description": "<p>Video</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "periodicity",
            "description": "<p>Periodicity</p>"
          },
          {
            "group": "Success 200",
            "type": "str",
            "optional": false,
            "field": "level",
            "description": "<p>Level</p>"
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
            "description": "<p>Value</p>"
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
          "content": "    HTTP/1.1 200 OK\n    {\n    \"workout_id\": 4,\n    \"name\": \"t\",\n    \"video\": \"http://127.0.0.1:8000/media/Kitten_Zoom_Filter_Mishap_VEC0LdZ.mp4\",\n    \"duration\": \"t\",\n    \"periodicity\": \"4\",\n    \"level\": \"Средний\",\n    \"description\": \"t\",\n    \"value\": \"t\",\n    \"image\": \"http://127.0.0.1:8000/media/kotik_LFuK6N5.jpg\",\n    \"sex\": \"M\",\n    \"troubles\": [\n        {\n            \"id\": 3,\n            \"name\": \"котик еще не на коленках\",\n            \"image\": \"Без_названия_dtDHOan.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Workout",
            "description": "<p>wasn't found The id of Workout was not existing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"WorkoutWasNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
