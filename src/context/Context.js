import { createContext, useReducer, useEffect, useState } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	isFetching: false,
	error: false,
};
const Another_State = [];

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
	const [betslip, setBetslip] = useState(Another_State);
	const [signupOpen, setSignupOpen] = useState(false);
	const betHandler = (value, name, rowid) => {
		const objy = { value, name, rowid };

		if (betslip.includes(objy)) {
			setBetslip((current) =>
				current.filter((element) => {
					return element !== objy;
				})
			);
		} else {
			setBetslip([...betslip, objy]);
			console.log(betslip);
		}
	};
	const deleteBetSlip = (value, name, rowid) => {
		setBetslip((current) =>
			current.filter((element) => {
				return element.rowid !== rowid;
			})
		);
	};
	const deleteAllBetSlip = () => {
		setBetslip([]);
		console.log("deleteed");
	};
	const signupOpenHandler = () => {
		setSignupOpen(!signupOpen);
	};
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(state.user));
	}, [state.user]);
	return (
		<Context.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
				betslip,
				betHandler,
				deleteBetSlip,
				deleteAllBetSlip,
				signupOpen,
				signupOpenHandler,
			}}
		>
			{children}
		</Context.Provider>
	);
};
