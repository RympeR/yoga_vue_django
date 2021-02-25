"""
    @apiDefine WorkoutWasNotFoundError

    @apiError Workout wasn't found The id of Workout was not existing

    @apiErrorExample Error-Response:
        HTTP/1.1 404 Not Found
        {
            "error": "WorkoutWasNotFound"
        }

"""

"""
@apiName 2. Workout
@apiGroup Workout

@api {GET} /api/workout/get-workout/{workout_id}/ 2. Get Workout

@apiParam {Number} workout_id Id-Workout 

@apiSuccess {int} workout_id ID
@apiSuccess {str} name Name
@apiSuccess {str} video Video
@apiSuccess {str} duration Duration
@apiSuccess {int} periodicity Periodicity
@apiSuccess {str} level Level
@apiSuccess {str} description Description
@apiSuccess {str} value Value
@apiSuccess {str} sex Sex
@apiSuccess {str} image Image
@apiSuccess {objects} troubles Troubles


@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
    "workout_id": 4,
    "name": "t",
    "video": "http://185.233.118.44/Kitten_Zoom_Filter_Mishap_VEC0LdZ.mp4",
    "duration": "t",
    "periodicity": "4",
    "level": "Средний",
    "description": "t",
    "value": "t",
    "image": "http://185.233.118.44/kotik_LFuK6N5.jpg",
    "sex": "M",
    "troubles": [
        {
            "id": 3,
            "name": "котик еще не на коленках",
            "image": "Без_названия_dtDHOan.jpg"
        }
    ]
}
@apiuse WorkoutWasNotFoundError
"""

"""
@apiName 2.1 Workout List
@apiGroup Workout

@api {GET} /api/workout/get-workout-list/ 2.1 Workout List

@apiSuccess {int} id ID
@apiSuccess {str} title Title
@apiSuccess {str} image Image-Workout

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
    "results": [
        {
            "id": 4,
            "name": "t",
            "video": "http://185.233.118.44/Kitten_Zoom_Filter_Mishap_VEC0LdZ.mp4",
            "duration": "t",
            "periodicity": "4",
            "level": "Средний",
            "image": "http://185.233.118.44/kotik_LFuK6N5.jpg",
            "description": "t",
            "value": "t",
            "sex": "M"
        }
    ]
}
@apiuse WorkoutWasNotFoundError
"""

"""

@apiName 2.2 Create workout
@apiGroup Workout

@api {POST} /api/workout/create-workout/ 2.2 Create workout

@apiParam {String} name
@apiParam {String} image
@apiParam {String} video
@apiParam {String} duration
@apiParam {Number} periodicity
@apiParam {String} level
@apiParam {String} description
@apiParam {String} value
@apiParam {String} sex
@apiParam {Object} troubles

@apiSuccess {int} id ID
@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 4
    }

"""

"""

@apiName 2.3 Update workout
@apiGroup Workout

@api {POST} /api/workout/update-workout/ 2.3 Update workout

@apiParam {Number} id
@apiParam {String} name
@apiParam {String} image
@apiParam {String} video
@apiParam {String} duration
@apiParam {Number} periodicity
@apiParam {String} level
@apiParam {String} description
@apiParam {String} value
@apiParam {String} sex
@apiParam {Array} sex

@apiSuccess {int} workout_id ID
@apiSuccess {str} name Name
@apiSuccess {str} video Video
@apiSuccess {str} duration Duration
@apiSuccess {int} periodicity Periodicity
@apiSuccess {str} level Level
@apiSuccess {str} description Description
@apiSuccess {str} value Value
@apiSuccess {str} sex Sex
@apiSuccess {str} image Image
@apiSuccess {objects} troubles Troubles

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 4
    }


"""

"""
@apiName 2.4 Get Workout Filtered List
@apiGroup Workout

@api {GET} /api/workout/get-workout-filtered-list/ 2.4 Get Workout Filtered List

@apiParam {String} sex Sex 
@apiParam {Number} peridoicity Peridoicity 
@apiParam {String} level Level 
@apiParam {Object} troubles Trouble id's array 

@apiSuccess {int} workout_id ID
@apiSuccess {str} name Name
@apiSuccess {str} image Image


@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
    "results": [
        {
            "id": 4,
            "name": "t",
            "image": "http://185.233.118.44/kotik_LFuK6N5.jpg"
        }
    ]
}
}
@apiuse WorkoutWasNotFoundError
"""

"""
@apiName 2.5 Get Workout List
@apiGroup Workout

@api {GET} /api/workout/get-workout-list/ 2.5 Get Workout List

@apiSuccess {int} workout_id ID
@apiSuccess {str} name Name
@apiSuccess {str} image Image


@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
    "results": [
        {
            "id": 4,
            "name": "t",
            "image": "http://185.233.118.44/kotik_LFuK6N5.jpg"
        }
    ]
}
}
@apiuse WorkoutWasNotFoundError
"""

"""
@apiName 2.6 Delete workout
@apiGroup Workout

@api {DELETE} /api/workout/delete-workout/{workout_id}/ 2.5 Delete workout

@apiParam {Number} workout_id Workout id 


@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "workout_id": 4
    }
    

@apiuse WorkoutWasNotFoundError
"""


"""
@apiName 3 Get trouble
@apiGroup Troubles

@api {GET} /api/workout/get-trouble/{trouble_id}/ 3 Get trouble

@apiParam {Number} trouble_id Trouble id

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
   
            "id": 2,
            "name": "котик вернулся на коленки",
            "image": "http://185.233.118.44/kotik_6d69TZ3.jpg"
    }

    

@apiuse WorkoutWasNotFoundError
"""

"""
@apiName 3.2 Get troubles list
@apiGroup Troubles

@api {GET} /api/workout/get-trouble-list/ 3.2 Get trouble list



@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
    "results": [
        {
            "id": 2,
            "name": "котик вернулся на коленки",
            "image": "http://185.233.118.44/kotik_6d69TZ3.jpg"
        },
        {
            "id": 3,
            "name": "котик еще не на коленках",
            "image": "http://185.233.118.44/ghrweherherh_dtDHOan.jpg"
        }
    ]
}
    

@apiuse WorkoutWasNotFoundError
"""

"""
@apiName 3.3 Create trouble
@apiGroup Troubles

@api {POST} /api/workout/create-trouble/ 3.3 Create trouble

@apiParam {Number} trouble_id Trouble id
@apiParam {String} image Trouble image
@apiParam {String} name Trouble name


@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "trouble_id": 4,
    }
    

@apiuse WorkoutWasNotFoundError
"""

"""
@apiName 3.4 Update trouble
@apiGroup Troubles

@api {PUT} /api/workout/update-trouble/{trouble_id}/ 3.4 Update trouble

@apiParam {Number} trouble_id Trouble id
@apiParam {String} image Trouble image
@apiParam {String} name Trouble name


@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "trouble_id": 4,
        "name": "test",
        "image": "http://185.233.118.44/kotik_LFuK6N5.jpg"
    }
    

@apiuse WorkoutWasNotFoundError
"""

"""
@apiName 3.5 Delete trouble
@apiGroup Troubles

@api {DELETE} /api/workout/delete-trouble/{trouble_id}/ 3.5 Delete trouble

@apiParam {Number} trouble_id Trouble id 


@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "trouble_id": 4
    }
    

@apiuse WorkoutWasNotFoundError
"""