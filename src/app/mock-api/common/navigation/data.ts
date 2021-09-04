/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    // {
    //     id   : 'example',
    //     title: 'Dashboard',
    //     type : 'basic',
    //     icon : 'heroicons_outline:chart-pie',
    //     link : '/example'
    // },
    // {
    //     id   : 'manage_wallet',
    //     title: 'Manage Users',
    //     type : 'basic',
    //     icon : 'heroicons_outline:user',
    //     link : '/manage-wallet'
    // },
    // {
    //     id   : 'manage_award',
    //     title: 'Manage Missions',
    //     type : 'basic',
    //     icon : 'heroicons_outline:gift',
    //     link : '/mission'
    // },
    // {
    //     id   : 'tranfer',
    //     title: 'Transfer',
    //     type : 'basic',
    //     icon : 'heroicons_outline:switch-horizontal',
    //     link : '/transfer'
    // },
    {
        id   : 'mission_reward',
        title: 'Redeem',
        type : 'basic',
        icon : 'heroicons_outline:switch-horizontal',
        link : '/mission-reward'
    },
    // {
    //     id   : 'learning_course',
    //     title: 'Learning Course',
    //     type : 'basic',
    //     icon : 'heroicons_outline:book-open',
    //     link : '/courses'
    // },
    {
        id   : 'sign_out',
        title: 'Sign Out',
        type : 'basic',
        icon : 'heroicons_outline:logout',
        link : '/sign-out'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example2',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example3',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example4',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
