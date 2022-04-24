import React from 'react';
import ListComponent from './ListComponent'

class MemberComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            아이디:'',
            비밀번호:'',
            이름:'',
            이메일:'',
            휴대폰:'',

            남성: false,
            여성: false,
            선택안함: true,            
            성별: '',

            생년: new Date().getFullYear(),
            생월: new Date().getMonth()+1,   //0 ~ 11
            생일: new Date().getDate(),
            생년월일: ''
        }
    }

    //키보드 입력 데이터 : 상태관리
    onChangeId = (e) => {
        this.setState({ 아이디: e.target.value });
    }
    onChangePw = (e) => {
        this.setState({ 비밀번호: e.target.value });
    }
    onChangeName = (e) => {
        this.setState({ 이름: e.target.value });
    }
    onChangeEmail = (e) => {
        this.setState({ 이메일: e.target.value });
    }
    onChangePhone = (e) => {
        this.setState({ 휴대폰: e.target.value });
    }

    //성별 gender
    onChangeGender = (e) => {

        if( e.target.value === '남성'){
            this.setState({
                남성:true,  //checked              
                여성:false,   
                선택안함:false             
            });
        }
        else if( e.target.value === '여성'){
            this.setState({
                남성:false,                
                여성:true,   //checked             
                선택안함:false                
            });
        }
        else if( e.target.value === '선택안함'){
            this.setState({
                남성:false,                
                여성:false,               
                선택안함:true //checked           
            });
        }

        this.setState({ 성별 : e.target.value });


    }

    //생년월일
    onChangeYear = (e) => {
        this.setState({생년: e.target.value });
    }
    onChangeMonth = (e) => {
        this.setState({생월: e.target.value });
    }
    onChangeDate = (e) => {
        this.setState({생일: e.target.value });
    }




    //폼전송 : 가입정보 저장
    onSubmitfn = (e) => {
        e.preventDefault();

        const inputObj = {
            아이디: this.state.아이디,
            비밀번호: this.state.비밀번호,
            이름: this.state.이름,
            이메일: this.state.이메일,
            휴대폰: this.state.휴대폰,
            성별: this.state.성별,
            생년월일: `${this.state.생년}-${this.state.생월}-${this.state.생일}`,
        }
                
        //로컬스토레이지 데이터이는 반드시 문자열만 가능 
        // : 객체형식 데이터를 문자열 형식으로 변환하여 저장한다.
        
        // localStorage.setItem( inputObj.아이디,  inputObj ); 데이터 안들어감 Object 로 들어감
        localStorage.setItem( inputObj.아이디,  JSON.stringify(inputObj) );

    }

    render() {
        return (
            <div id='member'>
                <h1>회원관리</h1>

                <div id='form-box'>
                    <form onSubmit={this.onSubmitfn} name='member' id='member' method='get' action='./resphonse.php'>
                        <ul>
                            <li>
                               <input type='text' onChange={this.onChangeId} placeholder='아이디' value={this.state.아이디} />
                            </li>
                            <li>
                                <input type='password' onChange={this.onChangePw}  placeholder='비밀번호' value={this.state.비밀번호}/>
                            </li>
                            <li>
                                <input type='text'  onChange={this.onChangeName}   placeholder='이름' value={this.state.이름}/>
                            </li>
                            <li>
                                <input type='email'  onChange={this.onChangeEmail}  placeholder='이메일' value={this.state.이메일}/>
                            </li>
                            <li>
                                <input type='text'   onChange={this.onChangePhone}  placeholder='휴대폰' value={this.state.휴대폰}/>
                            </li>
                            <li>
                                <div className='gender-box'>
                                    <span>
                                        <input id='inputMale' type='radio' onChange={this.onChangeGender}  name='gender' value='남성'  checked={this.state.남성} />
                                        <label htmlFor='inputMale'>남성</label>                                        
                                    </span>
                                    <span>
                                        <input id='inputFemale' type='radio'  onChange={this.onChangeGender}  name='gender'  value='여성'  checked={this.state.여성}  />
                                        <label htmlFor='inputFemale'>여성</label>
                                    </span>
                                    <span>                                        
                                        <input id='inputNone' type='radio'  onChange={this.onChangeGender}  name='gender' value='선택안함'   checked={this.state.선택안함}  />
                                        <label htmlFor='inputNone'>선택안함</label>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='birthday'>
                                    <input type='number' placeholder='YYYY' onChange={this.onChangeYear}  value={this.state.생년} />
                                    <input type='number' placeholder='MM'  onChange={this.onChangeMonth}  value={this.state.생월} />
                                    <input type='number' placeholder='DD'  onChange={this.onChangeDate}  value={this.state.생일} />
                                </div>
                            </li>
                        </ul>

                        <div className='button-box'>
                            <button type='submit'>가입하기</button>
                        </div>
                    </form>
                </div>
               
                <ListComponent />

            </div>
        );
    }
}

export default MemberComponent;