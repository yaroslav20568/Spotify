import { getAuthAccessToken } from "./index";

const proceedWithVerdict = (error: object, isValid: boolean) => {
	if (error) {
		console.error('Error while checking token.', error);
		return;
	}

	if (isValid) {
		console.log('It is valid');
	} else {
		console.log('It is invalid');
		getAuthAccessToken();
	}
}

export default proceedWithVerdict;