import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'example'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            {path: 'manage-wallet', loadChildren: () => import('app/modules/admin/manage-wallet/manage-wallet.module').then(m => m.ManageWalletModule)},
            {path: 'transfer', loadChildren: () => import('app/modules/admin/transfer/transfer.module').then(m => m.TransferModule)},
            {path: 'mission', loadChildren: () => import('app/modules/mission/mission-list/mission-list.module').then(m => m.MissionListModule)},
            {path: 'plan-listing', loadChildren: () => import('app/modules/plan/plan-listing/plan-listing.module').then(m => m.PlanListingModule)},
            {path: 'plan-options', loadChildren: () => import('app/modules/plan/plan-options/plan-options.module').then(m => m.PlanOptionsModule)},
            {path: 'add-plan', loadChildren: () => import('app/modules/plan/add-plan/add-plan.module').then(m => m.AddPlanModule)},
            {path: 'add-mission', loadChildren: () => import('app/modules/mission/add-mission/add-mission.module').then(m => m.AddMissionModule)},
            {path: 'mission-reward', loadChildren: () => import('app/modules/mission/mission-reward/mission-reward.module').then(m => m.MissionRewardModule)},
            {path: 'courses', loadChildren: () => import('app/modules/admin/course/course-listing/course-listing.module').then(m => m.CourseListingModule)},
            {path: 'course-details', loadChildren: () => import('app/modules/admin/course/course-details/course-details.module').then(m => m.CourseDetailsModule)}, 
            {path: 'add-reward', loadChildren: () => import('app/modules/mission/add-mission-reward/add-mission-reward.module').then(m => m.AddMissionRewardModule)},
        ] 
    }
];
