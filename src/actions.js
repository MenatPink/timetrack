import {
	SET_TIME_FRAME_TO_DAILY,
	SET_TIME_FRAME_TO_WEEKLY,
	SET_TIME_FRAME_TO_MONTHLY,
} from './constants';


export function setTimeFrameToDaily() {
	return {
		type: SET_TIME_FRAME_TO_DAILY,
		payload: 'daily',
	};
}

export function setTimeFrameToWeekly() {
	return {
		type: SET_TIME_FRAME_TO_WEEKLY,
		payload: 'weekly',
	};
}

export function setTimeFrameToMonthly() {
	return {
		type: SET_TIME_FRAME_TO_MONTHLY,
		payload: 'monthly',
	};
}
