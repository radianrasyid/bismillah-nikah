import React from 'react'
import { useSelector } from 'react-redux';
import OrganizationChart from "@dabeng/react-orgchart"
import { useNavigate } from 'react-router-dom';

export default function EmployeeNodeUpline() {

  const direct = useNavigate()
  const currentUser = useSelector((state) => state.auth);
  const token = currentUser.token;
  const [loading, setLoading] = React.useState(null);
  const [referred, setReferred] = React.useState([]);
  const [userData, setUserData] = React.useState(null);
  let [activeChild, setActiveChild] = React.useState(null);
  const [program, setProgram] = React.useState(null);


  const fetchData = async(e) => {
    setLoading(true)
    await fetch("https://umrohwebsite.herokuapp.com/api/v1/user/whoami", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(async(response) => {
        let hasil = await response.json();
        setUserData(hasil.user);
        let userCurrent = await hasil.user.referrerId;

        setReferred(userCurrent);

        let activeMembers = userCurrent.map((item) => {
            if(item.status == 1 && item.currentPayment !== 0){
                return item;
            }else{
                return null
            }
        })
        setActiveChild(activeMembers)

        await fetch(`https://umrohwebsite.herokuapp.com/api/v1/program/${hasil.user.ProgramId}`)
        .then(async(res) => {
            let result = await res.json();
            setProgram(result.data);
        })
    })
    setLoading(false)
}

React.useEffect(() => {
  fetchData()
}, [])

const childrens = referred.map((item, index) => {
  return { id: `${item.id}`, name: `${item.firstName} ${item.lastName}`, title: `mitra-${index+1}`}
})

console.log("INI ANAK",childrens);

const [state, setState] = React.useState({
  ds: {
    id: "1",
    name: userData !== null ? userData.referredfrom.firstName : currentUser.user,
    title: 'Leader',
    children: [
      { id: "2", name: currentUser.user, title: "ME", children: null },
    ]
  },
})

state.ds.children[0].children = childrens;
state.ds.name = userData !== null ? `${userData.referredfrom.firstName} ${userData.referredfrom.lastName}` : currentUser.user
// console.log("INI USERDATA", userData);

  return (
    <div>
      <OrganizationChart datasource={state.ds} onClickNode={(node) => direct(`/${node.id}`)} />
    </div>
  )
}
