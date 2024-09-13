'use client'
import { title } from "@/components/primitives";
import React from "react";

import Cardd from "./card";
import {CalendarDate, Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";


export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}></h1>

    <div className="m-4 grid gap-5">
    <div className="flex flex-col">
  <Card>
    <CardHeader className="text-xl justify-center py-3">
      Давать ли человеку второй шанс?
    </CardHeader>
    <CardBody>
      <div className="flex flex-col sm:flex-row  items-start">
        <div className="flex-1 pr-0 sm:pr-4">
          <p>
            Уверен, каждый задавал себе этот вопрос, давать шанс или нет? Ведь если не будет второго шанса, рядом с тобой не будет человека, а если все же дать человеку этот шанс? Что будет? Он исправится и попытается стать лучше? Или воспримет этот шанс как должное? Где-то внутри ты понимаешь, что ничего не изменится, что человек останется прежним. Ничего не изменится. Он продолжит причинять тебе боль. Ты говоришь себе: «нет, второго шанса не будет», но через некоторое время появляются не только вторые, но и третьи, четвертые, пятые шансы. Все это бесполезно. Но ты видишь, что это неправильно, и зачем ты ищешь аргументы и оправдания этому человеку, для которого, по сути, получить еще один шанс — обычное дело. Ты думаешь, что дашь человеку шанс, и он воспримет это как подарок, будет тебе благодарен. Это не так. Люди не меняются. Кто видел людей, которые менялись после того, как им дали еще один шанс? Я не видел.
          </p>
        </div>
        <img src="post1.jpg" alt="" height={240} width={200} className="rounded-3xl py-3" />
      </div>
    </CardBody>
    <CardFooter>
      13 sep. 2024
    </CardFooter>
  </Card>
</div>

<div className="flex flex-col">
  <Card>
    <CardHeader className="text-xl justify-center py-3">
    Агрессию испытывают лишь трусливые люди    </CardHeader>
    <CardBody>
      <div className="flex flex-col sm:flex-row  items-start">
        <div className="flex-1 pr-0 sm:pr-4">
          <p>
          По большому счету, агрессию испытывают лишь трусливые люди, не уверенные в своих силах, пытающиеся доказать всем обратное: как мопс, лающий на волкодава. Обретая силу, пропадет боязнь показать свою слабость. Сколько я видел драк – всегда дерутся люди, которые не умеют драться.
          </p>
        </div>
        <img src="post2.jpg" alt="" height={260} width={200} className="rounded-3xl py-3" />
      </div>
    </CardBody>
    <CardFooter>
      13 sep. 2024
    </CardFooter>
  </Card>
</div>


<div className="flex flex-col">
  <Card>
    <CardHeader className="text-xl justify-center py-3">
    Однажды нас не станет.   </CardHeader>
    <CardBody>
      <div className="flex flex-col sm:flex-row  items-start">
        <div className="flex-1 pr-0 sm:pr-4">
          <p>
          Твоя любимая кофейня закроется, а в твоём доме будут жить чужие тебе люди. ты правда все ещё боишься, что скажут и подумают о тебе другие?

перестань. наслаждайся своей жизнью. сейчас твоё время, действуй.
          </p>
        </div>
        <img src="pst3.jpg" alt="" height={260} width={200} className="rounded-3xl py-3" />
      </div>
    </CardBody>
    <CardFooter>
      13 sep. 2024
    </CardFooter>
  </Card>
</div>



<div className="flex flex-col">
  <Card>
    <CardHeader className="text-xl justify-center py-3">
    А.Блок  </CardHeader>
    <CardBody>
      <div className="flex flex-col sm:flex-row  items-start">
        <div className="flex-1 pr-0 sm:pr-4">
          <p>
          Невозможное было возможно. Но возможное — было мечтой.
          </p>
        </div>
        <img src="post5.jpg" alt="" height={260} width={200} className="rounded-3xl py-3" />
      </div>
    </CardBody>
    <CardFooter>
      13 sep. 2024
    </CardFooter>
  </Card>
</div>
    </div>

     </div>
  );
}
