import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "./ui/button";
import {ArrowRight} from "lucide-react";
import {useAuth} from "@clerk/nextjs";
import {SignOutButton} from "@clerk/nextjs";
import {currentUser} from "@clerk/nextjs/server";

const Navbar = async () => {
  // const {userId} = auth(); // will just give the userId (not much of use for now)
  const user = await currentUser();

  const isAdmin = true; // to be worked up later
  // console.log(user, "UIUUUUUUUUUUUUUUUU");

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 font-semibold"
          >
            case<span className="text-green-600">cobra</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                {/* <Link
                  href={"/api/auth/logout"}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })
                  )}
                >
                  Sign out
                </Link> */}
                <p className=" font-bold text-[18px] ">
                  <SignOutButton />
                </p>

                {isAdmin ? (
                  <Link
                    href={"/api/auth/logout"}
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })
                    )}
                  >
                    {" "}
                    ✨ Dashboard
                  </Link>
                ) : null}
                <Link
                  href={"/configure/upload"}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      className: "hidden sm:flex items-center gap-1",
                    })
                  )}
                >
                  {" "}
                  Create case
                  <ArrowRight className=" ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/sign-up"}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })
                  )}
                >
                  Sign up
                </Link>

                <Link
                  href={"/sign-in"}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })
                  )}
                >
                  {" "}
                  Login
                  <ArrowRight className=" ml-1.5 h-5 w-5" />
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
