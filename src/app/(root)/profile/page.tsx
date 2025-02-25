
import { redirect } from 'next/navigation';
import React from 'react';
import { getUserSession } from '../../../components/shared/ProfileForm/get-user';
import ProfileForm from '@/src/components/shared/ProfileForm/profile-form';
import { prisma } from '@/prisma/prisma-client';

interface Props {
    className?: string;
}
const ProfilePage: React.FC<Props> = async ({ className }) => {
    const session = await getUserSession();

    if (!session) {
        return redirect('/not-auth');
    }

    const user = await prisma.user.findFirst({ where: { email: session.email as string } });

    if (!user) {
        return redirect('/not-auth');
    }

    return (<ProfileForm data={user} />);
};

export default ProfilePage;