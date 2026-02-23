import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Login } from './components/login/login';
// import { FileUpload } from 'primeng/fileupload';
// import { FileUploadViewer } from './components/file-upload-viewer/file-upload-viewer';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                loadComponent: () => import('./core/dashboard/dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'login',
                component: Login
            },
            // {
            //     path: 'upload',
            //     component: FileUpload
            // },
            // {
            //     path: 'uploadViewer',
            //     component: FileUploadViewer
            // }
        ]
    }
    
];
