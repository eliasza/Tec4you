import Image from "next/image";
import Link from "next/link";
import { Flex } from "@tremor/react";

export default function Header(){
    return(
        <header className="border-bottom text-bg-secondary p-3">
            <div className="container">
            <Flex
                justifyContent="justify-between"
                alignItems="items-center"
                spaceX="space-x-0"
                truncate={false}
                marginTop="mt-0"
            >
                <Link href={"/"}>
                    <img src="/tec4you.png" width="230" height="52"/>
               </Link>
                <div>
                    <Link href={"/user/login"}>
                        Login
                    </Link><span> / </span> 
                    <Link href={"/user/register"}>
                        Cadastrar-me
                    </Link>
                </div>
            </Flex>
               
            </div>
        </header>
    )
}