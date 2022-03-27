import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CataloguePage } from "./pages/catalogue/catalogue.page";
import { LandingPage } from "./pages/landing/landing.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        component: LandingPage
    },
    {
        path: "trainer",
        component: TrainerPage
    },
    {
        path: "catalogue",
        component: CataloguePage
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