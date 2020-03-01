import auth from "@/components/auth";
import review from "@/components/review";
import admin from "@/components/admin";
import aReview from "@/components/a-review";

export default [
    {name: 'auth', path: '/', component: auth},
    {name: 'review', path: '/review', component: review},
    {name: 'admin', path: '/admin', component: admin},
    {name: 'a-review', path: '/a-review', component: aReview}


]
