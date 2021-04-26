define({ "api": [
  {
    "type": "GET",
    "url": "/api/workout/get-trouble-list/",
    "title": "3.1 Get trouble list",
    "name": "3.1_Get_trouble_list",
    "group": "Trouble",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>trouble id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>trouble name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>trouble image link</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    [\n        {\n            \"id\": 2,\n            \"name\": \"Тестовая пробема\",\n            \"image\": \"http://api-yoga.maximusapp.com/test_6d69TZ3.jpg\"\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Вторая тестовая проблема\",\n            \"image\": \"http://api-yoga.maximusapp.com/ghrweherherh_dtDHOan.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 without token\n{\n    \"status\": \"invalid token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/rules.py",
    "groupTitle": "Trouble"
  },
  {
    "type": "POST",
    "url": "/api/user/create-profile/",
    "title": "1.1 Create user",
    "name": "1.1_Create_user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>User avatar file</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>ok or error</p>"
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
    "filename": "apidoc/rules.py",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/api/user/profile/{user_id}",
    "title": "1.2 Get user profile",
    "name": "1.3_Get_user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Users id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>User avatar file</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>User avatar image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"image\": \"http://api-yoga.maximusapp.com/media/YFDNcvTLEhqx.jpg\",\n    \"first_name\": \"admin\",\n    \"last_name\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/rules.py",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/api/user/update-profile/{user_id}",
    "title": "1.4 Update user",
    "name": "1.4_Update_user",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>User avatar image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"image\": \"http://api-yoga.maximusapp.com/media/YFDNcvTLEhqx.jpg\",\n    \"first_name\": \"admin\",\n    \"last_name\": \"admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/rules.py",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/api/workout/get-workout/{workout_id}/",
    "title": "2.1 Get workout",
    "name": "2.1_Get_wprkout",
    "group": "Workout",
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workout_id",
            "description": "<p>Workout id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>workout name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>Workout video file</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Workout duration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "periodicity",
            "description": "<p>Workout periodicity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>Простой средний продвинутый</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>workout description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>U M F</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>workout value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Workout image preview</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "troubles",
            "description": "<p>list of troubles objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"workout_id\": 4,\n    \"name\": \"t\",\n    \"video\": \"http://api-yoga.maximusapp.com/Kitten_Zoom_Filter_Mishap_VEC0LdZ.mp4\",\n    \"duration\": \"t\",\n    \"periodicity\": \"4\",\n    \"level\": \"Средний\",\n    \"description\": \"t\",\n    \"value\": \"t\",\n    \"image\": \"http://api-yoga.maximusapp.com/kotik_LFuK6N5.jpg\",\n    \"sex\": \"M\",\n    \"troubles\": [\n        {\n            \"id\": 3,\n            \"name\":  \"http://api-yoga.maximusapp.com/media/YFDNcvTLEhqx.jpg\",\n            \"image\":  \"http://api-yoga.maximusapp.com/media/YF345TLEhqx.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/rules.py",
    "groupTitle": "Workout"
  },
  {
    "type": "GET",
    "url": "/api/workout/get-workout-list/",
    "title": "2.2 Workout List",
    "name": "2.2_Workout_List",
    "group": "Workout",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>list of workout objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    [\n        {\n            \"id\": 4,\n            \"name\": \"t\",\n            \"video\": \"http://api-yoga.maximusapp.com/Kitten_Zoom_Filter_Mishap_VEC0LdZ.mp4\",\n            \"duration\": \"t\",\n            \"periodicity\": \"4\",\n            \"level\": \"Средний\",\n            \"image\": \"http://api-yoga.maximusapp.com/kotik_LFuK6N5.jpg\",\n            \"description\": \"t\",\n            \"value\": \"t\",\n            \"sex\": \"M\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 without token\n{\n    \"status\": \"invalid token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/rules.py",
    "groupTitle": "Workout"
  },
  {
    "type": "GET",
    "url": "/api/workout/get-workout-filtered-list/",
    "title": "2.3 Workout filtered List",
    "name": "2.3_Workout_filtered_List",
    "group": "Workout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>Workout sex</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "peridoicity",
            "description": "<p>Workout peridoicity</p>"
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
            "type": "Object",
            "optional": false,
            "field": "troubles",
            "description": "<p>Trouble objects id's list</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Reques id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>workout name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>workout image</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    [\n        {\n            \"id\": 4,\n            \"name\": \"t\",\n            \"image\": \"http://api-yoga.maximusapp.com/kotik_LFuK6N5.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/rules.py",
    "groupTitle": "Workout"
  }
] });
