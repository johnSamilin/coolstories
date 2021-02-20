import React from "react"
import { Link } from "gatsby"
import ReactRough, { Path } from "react-rough"
import { RoughNotation } from 'react-rough-notation'
import Highlight from 'react-highlight'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Footer } from "../components/footer"

import "./strategy.css"
import "highlight.js/styles/Hybrid.css"

const Page = () => (
  <Layout className="strategy-page" path="strategy">
    <SEO lang="ru" title="Об управлении толпой" />
    <header className="lead">
      <h1>Управление толпой</h1>
      <summary>
        Забавная штука - разработка игр. Самые базовые механики в ней могут вызвать (и, несомненно, вызовут) затруднения у меня, как у frontend-разработчика, привыкшего думать другими категориями и архитектурными шаблонами.
      </summary>
    </header>
    <RoughNotation brackets="bottom" show type="bracket" roughness={1} color="red">
      <article>
        <p>
          К&nbsp;примеру, как передвигать модель персонажа и при этом синхронизировать его перемещение с анимацией ходьбы, чтобы опорная нога не скользила по поверхности, а оставалась на месте до следующего шага?
          <div id="path-illustration">
            <ReactRough width={720} height={600} renderer="svg">
              <Path roughness={1} d="M656.548,228.571C630.357,228.571 629.167,253.571 630.357,254.762C631.548,255.952 629.167,271.429 649.405,276.19C669.643,280.952 682.738,270.238 685.119,255.952C687.5,241.667 638.69,189.286 660.119,309.524C681.548,429.762 714.881,380.952 681.548,390.476C648.214,400 696.7,412.502 669.481,350.299C642.262,288.095 536.31,310.714 672.024,309.524C807.738,308.333 700.595,307.143 724.405,309.524C748.214,311.905 649.081,304.169 669.481,350.299" />
              <Path stroke="black" d="M684.935,407.755C684.935,407.755 655.983,506.04 588.173,508.326C520.364,510.612 447.221,378.802 454.84,392.516C462.459,406.231 396.174,275.945 298.65,367.374C201.126,458.802 188.174,230.993 185.888,212.707C183.602,194.421 195.793,8.517 340.555,130.421" />
              <Path stroke="black" d="M329.507,130.97L340.851,130.97L340.851,120.744" />
              <Path stroke="red" d="M604.173,487.755L626.269,509.85L616.364,499.945L632.364,483.945L603.411,512.897" />
              <Path stroke="red" d="M466.269,430.612L501.316,430.612L484.554,430.612L484.554,415.374L484.554,445.088" />
              <Path stroke="red" d="M364.935,320.897L395.412,351.374L379.924,335.886L394.417,321.393L366.081,349.729" />
              <Path stroke="red" d="M244.371,375.819L269.836,401.284L257.478,388.926L270.71,375.694L245.494,400.91" />
              <Path stroke="red" d="M171.969,203.303L201.429,203.303L185.95,203.303L182.455,190.57L190.195,212.541" />
              <Path stroke="rgb(235,235,235)" d="M683.976,407.675L617.538,500.322L484.662,432.056L379.824,336.97L259.139,388.779L185.996,204.094L340.815,130.342" />
            </ReactRough>
          </div>
          &nbsp;Вроде есть путь, по которому его нужно провести, сама модель и ландшафт.
          &nbsp;Но только как ориентировать его в нужную сторону? Если бы он направлялся по прямой,
          &nbsp;то можно было бы просто ориентировать его в сторону конечной точки. Но ведь путь - это ломаная кривая, так что по пути от одной точки до другой в таком случае он ходил бы боком.
          <br /><br />Можно предположить, что, когда он достигнет одной опорной точки, достаточно повернуть модель в сторону следующей опорной точки. Но и это не даст нужного эффекта: персонаж будет разворачиваться слишком резко.
          После долгих экспериментов и поиска решений я остановился на следующем (<Link to="https://github.com/mrdoob/three.js/issues/743">How to move objects along a spline</Link>): от начальной до конечной точки можно нарисовать кривую Безье, заставить персонажа двигаться по ней и смотреть себе под ноги, то есть быть направленным в следующую точку кривой. Так получится плавный проход по всем звеньям маршрута (с багами в некоторых случаях, но не будем об этом).
        </p>
        <p>
          Победа!  Но есть одно "но". Анимации в Three.js не проигрываются сами по себе, даже будучи запущенными внутри игрового цикла. Их нужно проводить самому, мол, любезная анимация, давай сделаем вид, что ты уже в точке 15%. И для этого обычно используется вспомогательный объект <Link to="https://threejs.org/docs/index.html#api/en/core/Clock">Clock</Link>. "Но" заключается в том, что он приостанавливает стрелки, если ресурсов не хватает. Так что вертеть камерой в момент передвижения не получится. Это несомненно полезно для анимации каких-то второстепенных моделей, частотой обновления которых можно пожертвовать для производительности, но не для модели игрока. Для того, чтобы сделать задачу продвижения анимации супер-приоритетной, пришлось вынести эту логику внутрь web worker'а.
      &nbsp;<Link to="https://github.com/johnSamilin/forest/commit/c272188c5fb6c7f17a223df6067b68c07c690c50#diff-7ab582f544ca56c9375ffb3cb4e7e8cbeb3dca29aabe63205f81e34c415f56c1R1">Анимация перемещения по кривой</Link>
        </p>
      </article>
    </RoughNotation>
    <div class="gif-wrapper">
      <img loading="lazy" src="images/useFrame.gif" alt="Перемещение без worker" />
      <div className="code">
        <Highlight className='javascript'>
          {"const ctx: Worker = self as any;\n \
\n \
let lastTime: number;\n \
let scheduleNextCall = true;\n \
\n \
function tick() {\n \
  const currentTime = performance.now();\n \
  ctx.postMessage({\n \
    useFrame: {\n \
      delta: (currentTime - lastTime) / 1000, // in seconds\n \
    },\n \
  });\n \
  lastTime = currentTime;\n \
  if (scheduleNextCall) {\n \
    requestAnimationFrame(tick);\n \
  }\n \
}\n \
\n \
// Respond to message from parent thread\n \
ctx.addEventListener('message', (e) => {\n \
  if (!e.data.useFrame) {\n \
    return;\n \
  }\n \
  if (e.data.useFrame.enabled) {\n \
    scheduleNextCall = true;\n \
    lastTime = performance.now();\n \
    tick();\n \
  } else {\n \
    scheduleNextCall = false;\n \
  }\n \
});"}
        </Highlight>
      </div>
      <img loading="lazy" src="images/useWorker.gif" alt="Перемещение с worker" />
    </div>
    <RoughNotation brackets={['top', 'bottom']} show type="bracket" roughness={1} color="red">
      <article>
        <p>
            Как говорилось в одном хорошем фильме, <Link to="https://www.youtube.com/watch?v=X1XQe3wwPmo">Трудно с тремя, а потом число не имеет значения!</Link> Управлять одним персонажем мне показалось занятием скучным, поэтому я <Link to="https://github.com/johnSamilin/forest/commit/f088c3b76a487ca26f0b4d96dca636b73b354da3#diff-3d74dddefb6e35fbffe3c76ec0712d5c416352d9449e2fcc8210a9dee57dff67R52">решил добавить еще несколько</Link>.
            <br/><br/>Архитектура react диктует императивный подход к управлению: когда компонент, представляющий игрока, получает новый путь, то он, как истинный самурай, реагирует запуском анимаций и передвижением по нему. Это свойство передает ему родительский компонент, так что, если в момент передвижения одной фигурки задать маршрут для другой, то все сразу сломается. Думаю, в нормальных движках с ООП-подходом такие вещи разрешаются легко и просто, но в проекте, где используется react-three-fiber, нужно исходить из принятых шаблонов. И самым логичным было бы выделение общего менеджера, который бы управлял NPC, как кукловод. На роль такого менеджера неплохо подошел Redux.
            <div className="code">
              <Highlight className='javascript'>
                {"const [activePlayer, setActivePlayer] = useState('oldman');\n \
                \n \
const [playersState, dispatch] = useReducer(playersReducer, {\n \
  movement: playerIds.reduce((acc, id) => ({ ...acc, [id]: null }), {}),\n \
  position: playerIds.reduce((acc, id, index) => ({ ...acc, [id]: [25 + index, 0, 25 + index] }), {}),\n \
});\n \
\n \
function handleFloorClick(e) {\n \
  e.stopPropagation();\n \
  if (isWorkerBusy) {\n \
    return;\n \
  }\n \
  dispatch(movePlayer(activePlayer, path));\n \
}\n \
\n \
<Context.Provider value={{ dispatch, playersState }}> \n \
  {playerIds.map((id) => <Character \n \
    id={id} \n \
    position={playersState.position[id]} \n \
    model=\"player/Manequin\" \n \
    isSelected={activePlayer === id} \n \
  />)} \n \
</Context.Provider>\
                "}
              </Highlight>
            </div>
            Так контроллер игры будет искать путь и сообщать его выбранному юниту, а тот, в свою очередь, уведомлять контроллер о том, что он достиг точки назначения. Чтобы, например, обновить информацию о том, какие клетки поверхности проходимы, а какие - нет, чтобы юниты не проходили сквозь друг друга.
            <br/><br/>
            Ну и наконец, когда по отдельности каждый NPC ходит своей дорогой, стоит научить их ходить всем вместе. Для этого всего лишь нужно искать путь для каждого выбранного персонажа по отдельности в тот момент, когда выбран конечный пункт и есть уверенность в том, что его можно достигнуть хотя бы одним персонажем.
            <br/><br/>
            В <Link to="/strategy-demo">демо-сцене</Link> можно попробовать, как это все работает. Выбрать нескольких персонажей можно зажав левый shift (либо рамкой, либо по отдельности).
        </p>

        <div className="date">21 февраля 2021</div>
        <Footer />
      </article>
    </RoughNotation>
    <div class="gif-wrapper">
      <img loading="lazy" src="images/separate-walk.gif" alt="Передвижение по отдельности" />
      <img loading="lazy" src="images/group-walk.gif" alt="Передвижение группой" />
      <img loading="lazy" src="images/bracket.gif" alt="Выделение группы" />
    </div>
  </Layout>
)

export default Page
