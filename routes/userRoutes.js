import { deleteLecture, getAllCourses } from "../controllers/courseController.js";
import express from "express";
import { addToPlaylist, changePassword, deleteMyProfile, deleteUser, forgetPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateUserRole, updateprofilepicture } from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(singleUpload, register);

//login
router.route("/login").post(login);

//logout

router.route("/logout").get(logout);

//getmyprofile
router.route("/me").get(isAuthenticated, getMyProfile);

//change password

router.route("/changepassword").put(isAuthenticated, changePassword);

//updateprofile

router.route("/updateprofile").put(isAuthenticated,updateProfile);

//update profile picture

router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateprofilepicture);


router.route("/forgetpassword").post(forgetPassword);

router.route("/resetpassword/:token").put(resetPassword)

//delete my getMyProfile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist)


router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist,deleteLecture);


router.route("/admin/users").get(isAuthenticated,authorizeAdmin,getAllUsers);


router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,updateUserRole).delete(isAuthenticated,authorizeAdmin
    ,deleteUser)
export default router