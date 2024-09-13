import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>I realized that from now on a large part of my life would be spent finding and correcting my own mistakes.  &nbsp;</h1> <br />
        <h1 className={title({ color: "violet" })}>– Maurice Wilkes, 1949&nbsp;</h1>
        <p className="mt-4">
        Я понял, что отныне большую часть своей жизни я буду тратить на поиск и исправление собственных ошибок. <br />
        - Морис Уилкс, 1949
        </p>
        <br />
        <h1 className={title()}>

        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
        
        </h2>
      </div>

      <div className="flex mt-6 gap-3">
        <Link
          
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          About
        </Link>

        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
