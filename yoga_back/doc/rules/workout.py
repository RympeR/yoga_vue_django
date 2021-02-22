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

@api {GET} /api/workout/get_workout/{workout_id}/ 2. Get Workout

@apiParam {Number} workout_id Id-Workout 

@apiSuccess {int} id ID
@apiSuccess {str} video Video
@apiSuccess {str} duration Duration
@apiSuccess {str} periodicity Periodicity
@apiSuccess {str} level Level
@apiSuccess {str} description Description
@apiSuccess {str} value Value

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 1,
        "video": "http://127.0.0.1:8000/media/user/YFDNcvTLEhqx.mp4",
        "duration": "12 min",
        "periodicity": "1 time a week",
        "level": "easy",
        "description": "this is really long desscription",
        "value": "with this workout you'll be better"
    }
@apiuse WorkoutWasNotFoundError
"""

"""
@apiName 2.1 Workout List
@apiGroup Workout

@api {GET} /api/workout/get_workout_list/ 2.1 Workout List

@apiSuccess {int} id ID
@apiSuccess {str} title Title
@apiSuccess {str} image Image-Workout

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "page_size": 300,
        "page": 1,
        "total_pages": 1,
        "count": 3,
        "results": [
            {
                "id": 1,
                "title": "test1",
                "image": "http://127.0.0.1:8000/media/user/YfewfHfduw.jpg",
            },
            {
                "id": 2,
                "title": "test2",
                "image": "http://127.0.0.1:8000/media/user/werweE.jpg",
            },
            {
                "id": 3,
                "title": "test3",
                "image": "http://127.0.0.1:8000/media/user/EGWfefWGgegew.jpg",
            }
        ],
        "links": {
            "next": null,
            "previous": null
        }
    }
@apiuse WorkoutWasNotFoundError
"""

"""

@apiName 2.2 Create workout
@apiGroup Workout

@api {POST} /api/workout/create_workout/ 2.2 Create workout

@apiParam {String} title
@apiParam {String} image
@apiParam {String} video
@apiParam {String} duration
@apiParam {String} periodicity
@apiParam {String} level
@apiParam {String} description
@apiParam {String} value

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

@api {POST} /api/workout/create_workout/ 2.3 Update workout

@apiSuccess {int} id ID
@apiParam {String} title Title
@apiParam {String} image Image
@apiParam {String} video Video
@apiParam {String} duration Duration
@apiParam {String} periodicity Periodicity
@apiParam {String} level Workout level
@apiParam {String} description Description
@apiParam {String} value Value

@apiSuccess {int} id ID
@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "id": 4
    }


"""
