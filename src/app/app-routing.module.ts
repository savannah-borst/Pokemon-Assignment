import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LandingPage } from "./pages/landing/landing.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LandingPage,
        canActivate: [LoginGuard]
    },
    {
        path: "trainer",
        component: TrainerPage,
        canActivate: [AuthGuard]
    },
    {
        path: "catalogue",
        component: CataloguePage,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], //used to import modules
    exports: [
        RouterModule
    ] // expose modules 
})
export class AppRoutingModule {

}