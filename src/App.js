import React, { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import Navbar from "./components/Navbar";

import { Button } from "@mui/material";

export default function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const session = supabase.auth.session();
		setUser(session?.user);
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				switch (event) {
					case "SIGNED_IN":
						setUser(session?.user);
						break;
					case "SIGNED_OUT":
						setUser(null);
						break;
					default:
				}
			}
		);
		return () => {
			authListener.unsubscribe();
		};
	}, []);

	const login = async () => {
		await supabase.auth.signIn({
			provider: "google",
		});
	};
	const logout = async () => {
		await supabase.auth.signOut();
	};

	return (
		<div>
			{user ? (
				<div>
					<Navbar user={user} logout={logout} />
				</div>
			) : (
				<button onClick={login}>Login with Google</button>
			)}
		</div>
	);
}
