import { useState } from 'react';


import './App.css';
import lucasname from "./assets/images/lucasnameblack.png"
import 멀바우 from "./assets/images/topboardcolor/멀바우.PNG"
import 자작 from "./assets/images/topboardcolor/자작.png"
import 아카시아 from "./assets/images/topboardcolor/아카시아.png"
import 자연목 from "./assets/images/topboardcolor/자연목.png"
import 티크 from "./assets/images/topboardcolor/티크.png"
import 진티크 from "./assets/images/topboardcolor/진티크.png"
import 월넛 from "./assets/images/topboardcolor/월넛.png"
import 블랙오크 from "./assets/images/topboardcolor/블랙오크.png"
import 화이트반광 from "./assets/images/topboardcolor/화이트(반광).png"
import 골드블랙 from "./assets/images/topboardcolor/골드블랙.png"
import 대리석무늬 from "./assets/images/topboardcolor/대리석무늬.png"
import 클래식 from "./assets/images/topboardcolor/클래식.png"

import threesixtop from "./assets/images/36t상판.png"
import fivefourtop from "./assets/images/54t상판.png"
import fourtyleg from "./assets/images/40mm다리.png"
import fiftyleg from "./assets/images/50mm다리.png"
import thirtyleg from "./assets/images/30mm다리.png"
import hleg from "./assets/images/h형쌍다리.png"
import threeCircle from "./assets/images/3인치원형.png"
import fourCircle from "./assets/images/4인치원형.png"
import squareMiddle from "./assets/images/네모중다리.png"
import squareBig from "./assets/images/네모대다리.png"
import oldLeg from "./assets/images/장구다리.png"

import spoonBox1 from "./assets/images/수저통1.png"
import spoonBox2 from "./assets/images/수저통2.png"
import spoonBox3 from "./assets/images/수저통3.png"
import spoonBox4 from "./assets/images/수저통4.png"
import spoonBox5 from "./assets/images/수저통5.png"

import basicDisplay from "./assets/images/basicDisplay.png"
import upgradeDisplay from "./assets/images/upgradeDisplay.png"

function App() {

  const [companyName, setCompanyName] = useState('');
  const [companyNo, setCompanyNo] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');


  const [legType, setLegType] = useState('');
  const [topType, setTopType] = useState('');
  const [spoonType, setSpoonType] = useState('');
  
  const typeClass = "w-[80px] h-[400px]"

  return (
    <div className="w-full pt-[40px] px-[60px] py-[100px]">
      <div id='page1'>
        <div className='flex text-center w-full justify-center align-middle items-center h-[60px]'>
            <img src={lucasname} alt='Lucas' className='w-[120px] h-[40px] mr-3' />
            <p className='text-xl'>상 품 계 약 서</p>
        </div>
        <div id="infoform">
          <div className='flex mt-[40px] justify-between'>
            <div>
              <label htmlFor='companyname'>상호명 : </label>
              <input id="companyname" type='text' placeholder='상호명' className='border ml-4 border-black text-center rounded-md h-[30px]' />
            </div>
            <div>
              <label htmlFor='companyno'>연락처 : </label>
              <input id="companyno" type='text' placeholder='연락처' className='border ml-4 border-black text-center rounded-md h-[30px]' />
            </div>
            <div>
              <label htmlFor='companytype'>업종 : </label>
              <input id="companytype" type='text' placeholder='업종' className='border ml-4 border-black text-center rounded-md h-[30px]'  />
            </div>
          </div>
          <div className='flex w-full mt-[40px] justify-center'>
            <label htmlFor='companyaddress'>주소지 : </label>
            <textarea id="companyaddress" type='text' placeholder='주소' className='border ml-4 border-black text-center rounded-md h-[30px] w-[80%]' />
          </div>
          <div id='topColorTypeZone' className='w-full mt-[40px]'>
            <p className='text-xl'>상 판 종 류 선 택</p>
            <div className='flex mt-[40px] justify-normal'>
              <div className='text-center'>
                <img src={멀바우} alt='멀바우' className={typeClass} />
                <p>멀바우</p>
                <input type='checkbox' className='w-5 h-5' value="멀우" />
              </div>
              <div className='text-center'>
                <img src={자작} alt='자작' className={typeClass}/>
                <p>자작</p>
                <input type='checkbox' className='w-5 h-5' value="자작" />
              </div>
              <div className='text-center'>
                <img src={아카시아} alt='아카시아' className={typeClass}/>
                <p>아카시아</p>
                <input type='checkbox' className='w-5 h-5' value="아카시아" />
              </div>
              <div className='text-center'>
                <img src={자연목} alt='자연목' className={typeClass}/>
                <p>자연목</p>
                <input type='checkbox' className='w-5 h-5' value="자연목" />
              </div>
              <div className='text-center'>
                <img src={티크} alt='티크' className={typeClass}/>
                <p>티크</p>
                <input type='checkbox' className='w-5 h-5' value="티크" />
              </div>
              <div className='text-center'>
                <img src={진티크} alt='진티크' className={typeClass}/>
                <p>진티크</p>
                <input type='checkbox' className='w-5 h-5' value="진티크" />
              </div>
              <div className='text-center'>
                <img src={월넛} alt='월넛' className={typeClass}/>
                <p>월넛</p>
                <input type='checkbox' className='w-5 h-5' value="월넛" />
              </div>
              <div className='text-center'>
                <img src={블랙오크} alt='블랙오크' className={typeClass}/>
                <p>블랙오크</p>
                <input type='checkbox' className='w-5 h-5' value="블랙오크" />
              </div>
              <div className='text-center'>
                <img src={화이트반광} alt='화이트반광' className={typeClass}/>
                <p>화이트(반광)</p>
                <input type='checkbox' className='w-5 h-5' value="화이트반광" />
              </div>
              <div className='text-center'>
                <img src={골드블랙} alt='골드블랙' className={typeClass}/>
                <p>골드블랙</p>
                <input type='checkbox' className='w-5 h-5' value="골드블랙" />
              </div>
              <div className='text-center'>
                <img src={대리석무늬} alt='대리석무늬' className={typeClass}/>
                <p>대리석무늬</p>
                <input type='checkbox' className='w-5 h-5' value="대리석무늬" />
              </div>
              <div className='text-center'>
                <img src={클래식} alt='클래식' className={typeClass}/>
                <p>클래식</p>
                <input type='checkbox' className='w-5 h-5' value="클래식" />
              </div>
            </div>
          </div>
          <div className='mt-[80px]'>
            <p className='text-xl'>상 판 두 께 종 류</p>
            <div className='mt-[40px]'>
              <div className='flex w-full justify-between'>
                <div className='items-center align-middle'>
                  <label htmlFor='thick1'>1. 기본 36mm - 36T</label>
                  <input id='thick1' type='checkbox' className='w-5 h-5 ml-5' value='15mm' />
                  <img src={threesixtop} alt='36T' className='w-[500px] h-[400px]' />
                </div>
                <div>
                  <label htmlFor='thick2'>2. 54mm - 54T</label>
                  <input id='thick2' type='checkbox' className='w-5 h-5 ml-5' value='54mm' />
                  <img src={fivefourtop} alt='54T' className='w-[500px] h-[400px]' />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[80px]'>
            <p className='text-xl'>철 제 다 리 선 택</p>
            <div className='grid grid-row-5 grid-cols-2 gap-4 p-4 mt-[40px]'>
              <div>
                <div>
                  <label htmlFor='40leg'>40mm 철재다리 블랙/화이트/그레이</label>
                  <input id='40leg' type='checkbox' className='w-5 h-5 ml-5' value='40mm철재다리' />
                </div>
                <div>
                  <img src={fourtyleg} alt='40mm다리' className='w-[500px] h-[300px]' />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='50leg'>50mm 철재다리 블랙/화이트/그레이</label>
                  <input id='50leg' type='checkbox' className='w-5 h-5 ml-5' value='50mm철재다리' />
                </div>
                <div>
                  <img src={fiftyleg} alt='50mm다리' className='w-[500px] h-[300px]' />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='30leg'>30mm 철재다리 블랙/화이트/그레이</label>
                  <input id='30leg' type='checkbox' className='w-5 h-5 ml-5' value='30mm철재다리' />
                </div>
                <div>
                  <img src={thirtyleg} alt='30mm다리' className='w-[500px] h-[300px]' />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='hlet'>H형 쌍다리 블랙/화이트/그레이</label>
                  <input id='hleg' type='checkbox' className='w-5 h-5 ml-5' value='H형 쌍다리' />
                </div>
                <div>
                  <img src={hleg} alt='h형다리' className='w-[500px] h-[300px]' />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='3inchCircle'>3인치(중) 철재원형다리 블랙/화이트/그레이</label>
                  <input id='3inchCircle' type='checkbox' className='w-5 h-5 ml-5' value='3인치(중) 철재원형다리' />
                </div>
                <div>
                  <img src={threeCircle} alt='3인치 원형' className='w-[500px] h-[300px]' />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='4inchCircle'>4인치(중) 철재원형다리 블랙/화이트/그레이</label>
                  <input id='4inchCircle' type='checkbox' className='w-5 h-5 ml-5' value='4인치(대) 철재원형다리' />
                </div>
                <div>
                  <img src={fourCircle} alt='4인치 원형' className='w-[500px] h-[300px]' />
                </div>
              </div>
              <div>
               <div>
                  <label htmlFor='squareMiddle'>네모(중)철재다리 블랙/화이트/그레이</label>
                  <input id='squareMiddle' type='checkbox' className='w-5 h-5 ml-5' value='네모(중)철재다리' />
                </div>
                <div>
                  <img src={squareMiddle} alt='네모중' className='w-[500px] h-[300px]' />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='squareBig'>네모(대)철재다리 블랙/화이트/그레이</label>
                  <input id='squareBig' type='checkbox' className='w-5 h-5 ml-5' value='네모(대)철재다리' />
                </div>
                <div>
                  <img src={squareBig} alt='네모대' className='w-[500px] h-[300px]' />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='oldLeg'>장구다리 블랙/화이트/그레이</label>
                  <input id='oldLeg' type='checkbox' className='w-5 h-5 ml-5' value='장구다리' />
                </div>
                <div>
                  <img src={oldLeg} alt='장구다리' className='w-[500px] h-[300px]' />
                </div>
              </div>

            </div>

          </div>
          
          <div>
            <p className='text-xl mt-[80px]'>수 저 통 내 부 선 택</p>
            <div className='mt-[40px] grid grid-row-3 grid-cols-2 gap-4 p-4'>
                <div>
                  <div className='flex items-center'>
                    <label htmlFor='spoonBox1'>수저통1</label>
                    <input id='spoonBox1' type='checkbox' className='w-5 h-5 ml-5' value='spoonBox1' />
                  </div>
                  <div>
                    <img src={spoonBox1} alt='spoonBox1' className='w-[400px] h-[300px]' />
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <label htmlFor='spoonBox2'>수저통2</label>
                    <input id='spoonBox2' type='checkbox' className='w-5 h-5 ml-5' value='spoonBox2' />
                  </div>
                  <div>
                    <img src={spoonBox2} alt='spoonBox2' className='w-[400px] h-[300px]' />
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <label htmlFor='spoonBox3'>수저통3</label>
                    <input id='spoonBox3' type='checkbox' className='w-5 h-5 ml-5' value='spoonBox3' />
                  </div>
                  <div>
                    <img src={spoonBox3} alt='spoonBox3' className='w-[400px] h-[300px]' />
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <label htmlFor='spoonBox4'>수저통4</label>
                    <input id='spoonBox4' type='checkbox' className='w-5 h-5 ml-5' value='spoonBox4' />
                  </div>
                  <div>
                    <img src={spoonBox4} alt='spoonBox4' className='w-[400px] h-[300px]' />
                  </div>
                </div>
                <div>
                  <div className='flex items-center'>
                    <label htmlFor='spoonBox5'>수저통5</label>
                    <input id='spoonBox5' type='checkbox' className='w-5 h-5 ml-5' value='spoonBox5' />
                  </div>
                  <div>
                    <img src={spoonBox5} alt='spoonBox5' className='w-[400px] h-[300px]' />
                  </div>
                </div>
            </div>
          </div>
          <div className='mt-[80px] text-xl'>
            <p>디 스 플 레 이 선 택</p>
            <div className='mt-[40px]'>
              <div className='flex align-middle items-center mb-[20px]'>
                <input id="basicDisplay" type='checkbox' className='w-5 h-5 mx-5' value="basicDisplay" />
                <label htmlFor='basicDisplay' >강화유리( 320 * 70mm ), 살균 기능만 포함</label>
              </div>
              <img src={basicDisplay} alt='basicDisplay' className='w-[900px] h-[300px]' />
            </div>
            <div>
            <div className='mt-[40px]'>
              <div className='flex align-middle items-center mb-[20px]'>
                <input id="upgradeDisplay" type='checkbox' className='w-5 h-5 mx-5' value="upgradeDisplay" />
                <label htmlFor='upgradeDisplay' >살균 + 광고 + 테이블오더 통합 디스플레이</label>
              </div>
              <img src={upgradeDisplay} alt='basicupgradeDisplayDisplay' className='w-[900px] h-[300px]' />
              </div>
            </div>
          </div>

          <div>
            <p className='text-xl mt-[80px]'>기 타 사 항</p>
            <div className='mt-[40px]'>
              <p>테 이 블 수 량 : </p>
              <div className='flex'>
                <input type='text' className='border mx-4 border-black text-center rounded-md w-[60px] h-[30px]' />
                <p>인용 테이블</p>
                <input type='text' className='border mx-4 border-black text-center rounded-md w-[40px] h-[30px]' />
                <p>mm</p>
                <input type='text' className='border mx-4 border-black text-center rounded-md w-[40px] h-[30px]' />
                <p>mm</p>
                <input type='text' className='border mx-4 border-black text-center rounded-md w-[40px] h-[30px]' />
                <p>개</p>
              </div>
              <div className='flex'>
                <input type='text' className='border mx-4 border-black text-center rounded-md w-[60px] h-[30px]' />
                <p>인용 테이블</p>
                <input type='text' className='border mx-4 border-black text-center rounded-md w-[40px] h-[30px]' />
                <p>mm</p>
                <input type='text' className='border mx-4 border-black text-center rounded-md w-[40px] h-[30px]' />
                <p>mm</p>
                <input type='text' className='border mx-4 border-black text-center rounded-md w-[40px] h-[30px]' />
                <p>개</p>
              </div>
            </div>
            <div className='mt-[40px]'>
              <p>결 제 방 법 선 택</p>
              <div className='flex align-middle mt-[40px]'>
                <p className='mr-5'>일 시 불 ( 현 금 / 카 드 )</p>
                <label htmlFor='cash'>현금</label>
                <input id='cash' type='checkbox' className='w-5 h-5 mx-5'/>
                <label htmlFor='card'>카드</label>
                <input id='card' type='checkbox' className='w-5 h-5 mx-5'/>
              </div>
              <div>
                <label htmlFor='month'>렌 탈 계 약 ( 12 / 24 / 36개월 선택)</label>
                <input id='month' type='text' className='border border-black text-center rounded-md w-[60px] h-[30px] mx-5'/>
              </div>
              <div>
                <label htmlFor='subthing'>콘센트, 보조배터리, 렌지 및 로스타 사용 여부(모델명 포함)</label>
                <input id='subthing' type='text' className='border border-black text-center rounded-md w-[400px] h-[30px] mx-5'/>
              </div>
              <div className='flex align-middle'>
                <label htmlFor='etc'>기 타 사 항</label>
                <textarea id='etc' type='text' className='border border-black text-center rounded-md w-[400px] h-[60px] mx-5'/>
              </div>
              <div>
                <label htmlFor='buyer'>직위 및 성명</label>
                <input id='buyer' type='text' className='border border-black text-center rounded-md w-[400px] h-[30px] mx-5'/>
              </div>
            </div>
            <button className='mt-[60px] py-5 px-7 border border-black text-2xl rounded-xl'>제출</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
