'use client';
import { useSession } from 'next-auth/react';

const ClientProtectedPage = () => {
	const { data: session } = useSession({
		required: true,
	});
	return (
		<section className='py-24'>
			<div className='container'>
				<h1 className='text-2xl font-bold'>Client Side</h1>
				<h2 className='mt-4 font-medium'>You are logged in</h2>
				<p>{session?.user?.name}</p>
			</div>
		</section>
	);
};

export default ClientProtectedPage;
