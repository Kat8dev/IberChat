import AccountProfile from "@/components/forms/AccountProfile";

async function page() {
    return(
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text"> 
                Welcome to the onboarding page!
            </h1>
            <p className="mt-3 text-base-regular text-light-2">
                Complete your profile now to use IberChat
            </p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile />
            </section>
        </main>
    )
}
export default page;