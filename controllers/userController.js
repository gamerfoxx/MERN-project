import { StatusCodes } from 'http-status-codes';

import UserModel from '../models/UserModel.js';
import JobModel from '../models/JobModel.js';

export const getCurrentUser = async (req, res) => {
	const user = await UserModel.findOne({ _id: req.user.userId });
	const updatedUser = user.toJSON();
	res.status(StatusCodes.OK).json({ updatedUser });
};

export const getApplicationStatus = async (req, res) => {
	res.status(StatusCodes.OK).json({ msg: 'get application status' });
};

export const updateUser = async (req, res) => {
	res.status(StatusCodes.OK).json({ msg: 'update user' });
};
