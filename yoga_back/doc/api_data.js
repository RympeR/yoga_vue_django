define({ "api": [
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
    "url": "/api/workout/get_workout_list/",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"page_size\": 300,\n    \"page\": 1,\n    \"total_pages\": 1,\n    \"count\": 3,\n    \"results\": [\n        {\n            \"id\": 1,\n            \"title\": \"test1\",\n            \"image\": \"http://127.0.0.1:8000/media/user/YfewfHfduw.jpg\",\n        },\n        {\n            \"id\": 2,\n            \"title\": \"test2\",\n            \"image\": \"http://127.0.0.1:8000/media/user/werweE.jpg\",\n        },\n        {\n            \"id\": 3,\n            \"title\": \"test3\",\n            \"image\": \"http://127.0.0.1:8000/media/user/EGWfefWGgegew.jpg\",\n        }\n    ],\n    \"links\": {\n        \"next\": null,\n        \"previous\": null\n    }\n}",
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
    "url": "/api/workout/create_workout/",
    "title": "2.2 Create workout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
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
            "type": "String",
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
    "url": "/api/workout/create_workout/",
    "title": "2.3 Update workout",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>Video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "periodicity",
            "description": "<p>Periodicity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>Workout level</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apidoc/workout.py",
    "groupTitle": "Workout"
  },
  {
    "name": "2._Workout",
    "group": "Workout",
    "type": "GET",
    "url": "/api/workout/get_workout/{workout_id}/",
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
            "field": "id",
            "description": "<p>ID</p>"
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
            "type": "str",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"video\": \"http://127.0.0.1:8000/media/user/YFDNcvTLEhqx.mp4\",\n    \"duration\": \"12 min\",\n    \"periodicity\": \"1 time a week\",\n    \"level\": \"easy\",\n    \"description\": \"this is really long desscription\",\n    \"value\": \"with this workout you'll be better\"\n}",
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
