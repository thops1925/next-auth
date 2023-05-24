'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Component() {
	const { data: session } = useSession();

	console.log(session);

	if (session) {
		return (
			<div>
				Signed in as {session.user?.name} <br />
				<img src={session.user?.image} alt='logo' width={50} height={50} />
				<button onClick={() => signOut()}>Sign out</button>
			</div>
		);
	}
	return (
		<div>
			Not signed in <br />
			<button onClick={() => signIn()} className='bg-white text-black rounded-md px-2'>
				Sign in
			</button>
		</div>
	);
}
