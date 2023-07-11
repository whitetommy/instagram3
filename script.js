document.addEventListener("DOMContentLoaded",
    function(e){
        let configID=document.querySelector("#id")
        let idText=document.querySelector("#id span")
        configID.addEventListener("click",
            function(e){
                idText.textContent=prompt("새로운 아이디를 입력하세요")
            }
        )
        
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false

        let profileEditButton=document.querySelector(".profile_info button")
        profileEditButton.addEventListener("click", 
            function(e){
                if(changing){
                    let newUserInfo = userInfo.querySelector("input").value
                    let newSummary = summary.querySelector("input").value
                    let newProfileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = newUserInfo
                    summary.innerHTML = newSummary

                    if(newProfileDetail.startsWith("http")){
                        newProfileDetail = "<a href=" + newProfileDetail + ">" + newProfileDetail +"</a>"
                    }

                    profileDetail.innerHTML = newProfileDetail

                    e.target.textContent = "프로필 편집"
                    changing = false
                }
                else{
                    let newUserInfo = userInfo.textContent
                    let newSummary = summary.textContent
                    let newProfileDetail = profileDetail.textContent

                    userInfo.innerHTML = "<input value=" + newUserInfo + "></input>"
                    summary.innerHTML = "<input value=" + newSummary + "></input>"
                    profileDetail.innerHTML = "<input value=" + newProfileDetail+ "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }
            }
        )

        let profile_pic = document.querySelector(".profile_pic .circle_pic")

        profile_pic.addEventListener("click",
            function(e){
                profile_pic.setAttribute("src", prompt("이미지 url을 입력해 주세요!"))
            }
        )

    }
)