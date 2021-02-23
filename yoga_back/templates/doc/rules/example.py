
"""
@apiName 1. Create user
@apiGroup User

@api {POST} /api/user/create_user/ 1. Create user

@apiParam {String} first_name  First-name
@apiParam {String} last_name  Last-name
@apiParam {String} image  Profile image

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
        "user_id": 1
    }

@apiErrorExample Error-Response:
    HTTP/1.1 400
    {
        "non_field_errors": [
            "Unable to create user with provided credentials."
        ]
    }
"""


"""
@apiName 1.1 Profile
@apiGroup User

@api {GET} /api/user/profile/{user_id} 1.1 Profile

@apiParam {Number} user_id UserId

@apiSuccess {int} id ID
@apiSuccess {str} image image
@apiSuccess {str} first_name first name
@apiSuccess {str} last_name last name

@apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "id": 1,
    "image": "http://127.0.0.1:8000/media/user/YFDNcvTLEhqx.jpg",
    "first_name": "admin",
    "last_name": "admin"
}
"""

"""
@apiName 1.2 Update Profile
@apiGroup User

@api {PUT} /api/user/update_profile/{user_id} 1.2 Update Profile

@apiParam {Number} user_id UserId
@apiParam {String} image image
@apiParam {String} first_name first name
@apiParam {String} last_name last name

@apiSuccess {int} user_id ID
@apiSuccess {str} image image
@apiSuccess {str} first_name first name
@apiSuccess {str} last_name last name

@apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
    "user_id": 1,
    "image": "http://127.0.0.1:8000/media/user/YFDNcvTLEhqx.jpg",
    "first_name": "admin",
    "last_name": "admin"
}
"""