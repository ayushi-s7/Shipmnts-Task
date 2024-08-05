const mockData = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 28,
    role: "Engineer",
    hireDate: "2022-01-15",
    isActive: true,
    salary: 85000,
    department: "Development",
    projectsCompleted: 5,
    lastLogin: "2024-07-28T14:48:00.000Z",
    accessLevel: "Admin"
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 34,
    role: "Manager",
    hireDate: "2020-06-30",
    isActive: false,
    salary: 95000,
    department: "Operations",
    projectsCompleted: 10,
    lastLogin: "2024-07-30T09:21:00.000Z",
    accessLevel: "User"
  },
  {
    id: 3,
    name: "Charlie Rose",
    age: 22,
    role: "Intern",
    hireDate: "2023-03-01",
    isActive: true,
    salary: 45000,
    department: "Development",
    projectsCompleted: 1,
    lastLogin: "2024-07-29T17:03:00.000Z",
    accessLevel: "User"
  },
  {
    id: 4,
    name: "David Green",
    age: 40,
    role: "Director",
    hireDate: "2018-11-20",
    isActive: true,
    salary: 120000,
    department: "Management",
    projectsCompleted: 20,
    lastLogin: "2024-07-27T12:35:00.000Z",
    accessLevel: "Admin"
  },
  {
    id: 5,
    name: "Eva White",
    age: 30,
    role: "Designer",
    hireDate: "2021-05-15",
    isActive: true,
    salary: 70000,
    department: "Design",
    projectsCompleted: 8,
    lastLogin: "2024-07-31T10:15:00.000Z",
    accessLevel: "User"
  },
  {
    id: 6,
    name: "Frank Black",
    age: 29,
    role: "Engineer",
    hireDate: "2019-09-17",
    isActive: true,
    salary: 80000,
    department: "Development",
    projectsCompleted: 6,
    lastLogin: "2024-07-25T11:45:00.000Z",
    accessLevel: "User"
  },
  {
    id: 7,
    name: "Grace Brown",
    age: 26,
    role: "Engineer",
    hireDate: "2021-04-10",
    isActive: false,
    salary: 78000,
    department: "Development",
    projectsCompleted: 4,
    lastLogin: "2024-07-20T09:00:00.000Z",
    accessLevel: "User"
  },
  {
    id: 8,
    name: "Hank Green",
    age: 45,
    role: "Senior Manager",
    hireDate: "2017-03-25",
    isActive: true,
    salary: 110000,
    department: "Operations",
    projectsCompleted: 15,
    lastLogin: "2024-07-29T13:22:00.000Z",
    accessLevel: "Admin"
  },
  {
    id: 9,
    name: "Ivy Blue",
    age: 31,
    role: "Designer",
    hireDate: "2019-08-05",
    isActive: true,
    salary: 72000,
    department: "Design",
    projectsCompleted: 7,
    lastLogin: "2024-07-28T08:48:00.000Z",
    accessLevel: "User"
  },
  {
    id: 10,
    name: "Jack White",
    age: 37,
    role: "Product Manager",
    hireDate: "2020-02-20",
    isActive: false,
    salary: 95000,
    department: "Product",
    projectsCompleted: 12,
    lastLogin: "2024-07-26T15:18:00.000Z",
    accessLevel: "Admin"
  },
  {
    id: 11,
    name: "Kara Black",
    age: 33,
    role: "Engineer",
    hireDate: "2018-12-12",
    isActive: true,
    salary: 85000,
    department: "Development",
    projectsCompleted: 9,
    lastLogin: "2024-07-29T12:00:00.000Z",
    accessLevel: "User"
  },
  {
    id: 12,
    name: "Leo Green",
    age: 27,
    role: "Designer",
    hireDate: "2021-01-30",
    isActive: true,
    salary: 68000,
    department: "Design",
    projectsCompleted: 3,
    lastLogin: "2024-07-28T16:15:00.000Z",
    accessLevel: "User"
  },
  {
    id: 13,
    name: "Mona Blue",
    age: 36,
    role: "Engineer",
    hireDate: "2019-11-18",
    isActive: true,
    salary: 87000,
    department: "Development",
    projectsCompleted: 11,
    lastLogin: "2024-07-30T14:50:00.000Z",
    accessLevel: "User"
  },
  {
    id: 14,
    name: "Nina Brown",
    age: 25,
    role: "Intern",
    hireDate: "2023-04-14",
    isActive: true,
    salary: 42000,
    department: "Development",
    projectsCompleted: 2,
    lastLogin: "2024-07-31T11:00:00.000Z",
    accessLevel: "User"
  },
  {
    id: 15,
    name: "Oscar White",
    age: 42,
    role: "Director",
    hireDate: "2016-05-11",
    isActive: true,
    salary: 125000,
    department: "Management",
    projectsCompleted: 22,
    lastLogin: "2024-07-29T09:33:00.000Z",
    accessLevel: "Admin"
  }
];

function displaytabledata(data) {
    const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    tableBody.innerHTML='';
    data.forEach(item => {
        const row = tableBody.insertRow();
        const cell1=row.insertCell(0);
        const cell2=row.insertCell(1);
        const cell3=row.insertCell(2);
        const cell4=row.insertCell(3);
        const cell5=row.insertCell(4);
        const cell6=row.insertCell(5);
        const cell7=row.insertCell(6);
        const cell8=row.insertCell(7);
        const cell9=row.insertCell(8);
        const cell10=row.insertCell(9);
        const cell11=row.insertCell(10);
        cell1.textContent=item.id;
        cell2.textContent=item.name;
        cell3.textContent=item.age;
        cell4.textContent=item.role;
        cell5.textContent=item.hireDate;
        cell6.textContent=item.isActive?'true':'false';
        cell7.textContent=`$${item.salary.toLocaleString()}`;
        cell8.textContent=item.department;
        cell9.textContent=item.projectsCompleted;
        cell10.textContent=new Date(item.lastLogin).toLocaleString();
        cell11.textContent=item.accessLevel;
    });
}

displaytabledata(mockData);

let sortvalue = {};

function sortable(colindex,type) {
    const tbody=document.querySelector("data-table tbody");
    const rows=Array.from(tbody.querySelectorAll("tr"));
    const direction=sortvalue[colindex]||'asc';

    rows.sort((a,b) => {
        const val1=a.children[colindex].innerText;
        const val2=b.children[colindex].innerText;
        let result;
        if (type==='integer') {
            result=parseFloat(val1)-parseFloat(val2);
        } else if (type==='string') {
            result=val1.localeCompare(val2);
        } else if (type==='date') {
            result=new Date(val1) - new Date(val2);
        } else if (type==='boolean') {
            result=(val1==='true'?1:0)-(val2==='true'?1:0);
        }

        return direction==='asc'?result:-result;
    });
    sortvalue[colindex]=direction==='asc'?'desc':'asc';
    tbody.innerHTML='';
    // while(tbody.firstChild){
    //     tbody.removeChild(tbody.firstChild);
    // }
    rows.forEach(row=>tbody.appendChild(row));
}

function parseSalary(salary) {
    return parseFloat(salary.replace(/[$,]/g, ''));
}

const filter_datatypes = {
    integer: ['equals', 'less_than', 'less_than_or_equal', 'greater_than', 'greater_than_or_equal', 'range', 'not_equal'],
    string: ['contains', 'not_contains', 'equals', 'not_equal', 'starts_with', 'ends_with', 'isnull', 'is_not_null'],
    date: ['DateIs', 'date_range', 'equals', 'less_than', 'less_than_or_equal', 'greater_than', 'greater_than_or_equal', 'not_equal', 'isnull', 'is_not_null'],
    boolean: ['isnull', 'is_not_null', 'equals']
};

function updatefilter_datatypes() {
    const column=document.getElementById('filter-column').value;
    const filtertype=document.getElementById('filter-type');
    filtertype.innerHTML='';

    let options=[];
    if (['id', 'age', 'projectsCompleted','salary'].includes(column)) {
        options=filter_datatypes.integer;
    } else if (['name', 'role', 'department', 'accessLevel'].includes(column)) {
        options=filter_datatypes.string;
    } else if(['hireDate', 'lastLogin'].includes(column)) {
        options=filter_datatypes.date;
    } else if(column==='isActive') {
        options=filter_datatypes.boolean;
    }

    options.forEach(option => {
        const opt=document.createElement('option');
        opt.value=option;
        opt.textContent=option.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        filtertype.appendChild(opt);
    });
}

function applyfilters() {
    const column=document.getElementById('filter-column').value;
    const filtertype=document.getElementById('filter-type').value;
    const value1=document.getElementById('filter-value1').value;
    const value2=document.getElementById('filter-value2').value || null;
    let filtereddata=mockData;

    switch (column) {
        case 'id':
            filtereddata=filterint(column,filtertype,value1,value2);
            break;
        case 'age':
            filtereddata=filterint(column,filtertype,value1,value2);
            break;
        case 'projectsCompleted':
            filtereddata=filterint(column,filtertype,value1,value2);
            break;
        case 'salary':
            filtereddata=filterint(column,filtertype,value1,value2);
            break;
        case 'name':
            filtereddata=filterstr(column,filtertype,value1);
            break;
        case 'role':
            filtereddata=filterstr(column,filtertype,value1);
            break;
        case 'department':
            filtereddata=filterstr(column,filtertype,value1);
            break;
        case 'accessLevel':
            filtereddata=filterstr(column,filtertype,value1);
            break;
        case 'hireDate':
            filtereddata=filterdate(column,filtertype,value1,value2);
            break;
        case 'lastLogin':
            filtereddata=filterdate(column,filtertype,value1,value2);
            break;
        case 'isActive':
            filtereddata=filterbool(column,filtertype,value1);
            break;
        default:
            filtereddata=mockData;
            break;
    }

    displaytabledata(filtereddata);
}

function filterint(column,type,value1,value2) {
    const numericValue1=parseFloat(value1);
    const numericValue2=value2?parseFloat(value2):null;
    if(column==='salary'){
        numericValue1=parseSalary(item[column]);
    }
    switch (type) {
        case 'equals':
            return mockData.filter(item=>item[column]===numericValue1);
        case 'less_than':
            return mockData.filter(item=>item[column]<numericValue1);
        case 'less_than_or_equal':
            return mockData.filter(item=>item[column]<=numericValue1);
        case 'greater_than':
            return mockData.filter(item=>item[column]>numericValue1);
        case 'greater_than_or_equal':
            return mockData.filter(item=>item[column]>=numericValue1);
        case 'range':
            return mockData.filter(item=>item[column]>=numericValue1 && item[column]<=numericValue2);
        case 'not_equal':
            return mockData.filter(item=>item[column]!==numericValue1);
        default:
            return mockData;
    }
}

function filterstr(column, type, value) {
    switch (type) {
        case 'contains':
            return mockData.filter(item=>item[column].includes(value));
        case 'not_contains':
            return mockData.filter(item=>!item[column].includes(value));
        case 'equals':
            return mockData.filter(item=>item[column]===value);
        case 'not_equal':
            return mockData.filter(item=>item[column]!==value);
        case 'startsWith':
            return mockData.filter(item=>item[column].startsWith(value));
        case 'ends_with':
            return mockData.filter(item=>item[column].ends_with(value));
        case 'isnull':
            return mockData.filter(item=>item[column]===null);
        case 'is_not_null':
            return mockData.filter(item=>item[column]!==null);
        default:
            return mockData;
    }
}

function filterdate(column,type,value1,value2) {
    const dateValue1=new Date(value1);
    const dateValue2=value2?new Date(value2) : null;
    
    switch (type) {
        case 'DateIs':
            return mockData.filter(item=>new Date(item[column]).toDateString()===dateValue1.toDateString());
        case 'date_range':
            return mockData.filter(item=>new Date(item[column])>=dateValue1 && new Date(item[column])<=dateValue2);
        case 'equals':
            return mockData.filter(item=>new Date(item[column]).toDateString()===dateValue1.toDateString());
        case 'less_than':
            return mockData.filter(item=>new Date(item[column])<dateValue1);
        case 'less_than_or_equal':
            return mockData.filter(item=>new Date(item[column])<=dateValue1);
        case 'greater_than':
            return mockData.filter(item=>new Date(item[column])>dateValue1);
        case 'greater_than_or_equal':
            return mockData.filter(item=>new Date(item[column])>=dateValue1);
        case 'not_equal':
            return mockData.filter(item=>new Date(item[column]).toDateString()!==dateValue1.toDateString());
        case 'isnull':
            return mockData.filter(item=>item[column]===null);
        case 'is_not_null':
            return mockData.filter(item=>item[column]!==null);
        default:
            return mockData;
    }
}

function filterbool(column,type,value) {
    switch (type) {
        case 'equals':
            return mockData.filter(item=>item[column]===(value==='true'));
        case 'isnull':
            return mockData.filter(item=>item[column]===null);
        case 'is_not_null':
            return mockData.filter(item=>item[column] !== null);
        default:
            return mockData;
    }
}

document.getElementById('filter-column').addEventListener('change', updatefilter_datatypes);

updatefilter_datatypes();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('filter-type').addEventListener('change', (e) => {
        const value2Input = document.getElementById('filter-value2');
        if (e.target.value==='range') {
            value2Input.style.display='inline';
        } else {
            value2Input.style.display='none';
        }
    });

    document.getElementById('search-input').addEventListener('input',(e)=>{
        const searchval=e.target.value.toLowerCase();
        const filteredData=mockData.filter(item => {
            return Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchval)
            );
        });
        displaytabledata(filteredData);
    });


});



  

 