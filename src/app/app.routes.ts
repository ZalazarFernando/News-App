import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ArticleComponent } from './core/article/article.component';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { abort } from 'process';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    {
        path: 'article/:id',
        component: ArticleComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    }
];
