import auth from "@/components/auth";
import user from "@/components/user";
import mounthly from "@/components/monthly"
import review from "@/components/review";
import admin from "@/components/admin";
import aReview from "@/components/a-review";
import aMonthly from "@/components/a-monthly";

export default [
    {name: 'auth', path: '/', component: auth},
    {name: 'user', path: '/user', component: user},
    {name: 'review', path: '/review', component: review},
    {name: 'monthly', path: '/monthly', component: mounthly},
    {name: 'admin', path: '/admin', component: admin},
    {name: 'a-review', path: '/a-review', component: aReview},
    {name: 'a-monthly', path: '/a-monthly', component: aMonthly}
]
