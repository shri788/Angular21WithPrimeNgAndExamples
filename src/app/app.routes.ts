import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Login } from './components/login/login';
import { FileUploadWithDrag } from './components/file-upload-with-drag/file-upload-with-drag';
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
            {
                path: 'uploadWithDrag',
                component: FileUploadWithDrag
            }
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
