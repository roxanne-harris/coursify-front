import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CourseListPage } from '../pages/course-list/course-list';
import { CourseService } from '../services/course.service';
import { AddCoursePage } from '../pages/add-course/add-course';
import { CoursePage } from '../pages/course/course';
import { ProfilePage } from '../pages/profile/profile';
import { FormsPage } from '../pages/forms/forms';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { UniversitiesPage } from '../pages/universities/universities';
import { LandingPage } from '../pages/landing/landing';
import { UniversityService } from '../services/university.service';
import { UniversityPage } from '../pages/university/university';
import { ProfessorService } from '../services/professor.service';
import { AddReviewPage } from '../pages/add-review/add-review';
import { ReviewsPage } from '../pages/reviews/reviews';
import { PaymentPage } from '../pages/payment/payment';
import { ProfessorsPage } from '../pages/professors/professors';
import { ProfessorPage } from '../pages/professor/professor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CourseListPage,
    AddCoursePage,
    CoursePage,
    ProfilePage,
    FormsPage,
    LoginPage,
    RegistrationPage,
    LandingPage,
    UniversitiesPage,
    UniversityPage,
    AddReviewPage,
    ReviewsPage,
    PaymentPage,
    ProfessorsPage,
    ProfessorPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: CourseListPage, name: 'CourseList', segment: 'courseList' },
        { component: FormsPage, name: 'Forms', segment: 'forms'},
        { component: LoginPage, name: 'Login', segment: 'login'},
        { component: RegistrationPage, name: 'Register', segment: 'register'},
        { component: LandingPage, name: 'Landing', segment: 'landing'},
        { component: UniversitiesPage, name: 'Universities', segment: 'universities'},
      ]
    }),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CourseListPage,
    AddCoursePage,
    CoursePage,
    ProfilePage,
    FormsPage,
    LoginPage,
    RegistrationPage,
    LandingPage,
    UniversitiesPage,
    UniversityPage,
    AddReviewPage,
    ReviewsPage,
    PaymentPage,
    ProfessorsPage,
    ProfessorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MenuController,
    CourseService,
    UniversityService,
    ProfessorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
