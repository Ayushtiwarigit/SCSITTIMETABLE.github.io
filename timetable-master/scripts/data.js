let year = '2023';
let semester = 'Spring';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	'BCA2': new School('BC', 'Bachelor of Computer Application Sem 2', []),
	'BCA4': new School('CC', 'Bachelor of Computer Application Sem 4', []),
	'BCA6': new School('CB', 'Bachelor of Computer Application Sem 6', []),
	
	'MCA2': new School('MC', 'Master of Computer Application Sem A', []),
	'MCAB': new School('CS', 'Master of Computer Application Sem B', []),

	'Msc2': new School('MS', 'Master of Science Sem 2', []),
	'Msc4': new School('SS', 'Master of Science Sem 4', []),

	'MBA2': new School('MB', 'Master of Business Administration Sem 2', []),
	'MBA4': new School('BB', 'Master of Business Administration Sem 4', []),
	
	
};

let courses = {
	

	/* Bachelor of Computer Application Sem 2*/
	'BC328': new Course('Object Oriented Programming Through C++ (LABOOPC)', 'Mr.K.L.Suryawanshi', 'L'),//  lab 2x2
	'BC3208': new Course('Object Oriented Programming Through C++ (OOPC)', 'Mr.K.L.Suryawanshi', 'A'), //4 class
	'BC2020': new Course('Electronic Circuits (EC)', 'Ms.Minal Nagar', 'B'), 
	'BC220': new Course('Electronic Circuits (LABEC)', 'Ms.Minal Nagar', 'K'),
	'BC1905': new Course('English Language and Composition (English)', 'Ms. Soniya Chimnani', 'N'), //2 class bas 
	'BC2927': new Course('Environmental Awareness (EA)', 'Dr.Shyamli Chowdhury', 'M'), //2 class bas
	'BC1501': new Course('operating system & PC packages (Pc packages)', 'Dr.Deepika Rai', 'C'), //2 class
	'BC1102': new Course('Mathematics (Math)', 'Ms. Simran Damodare', 'D'), //4 class 
	
	
	 /* Bachelor of Computer Application 4 Sem
 4*/

	'CC328': new Course('java programming (LABJAVA)', 'Dr.Ajay Tiwari', 'L'),
	'CC3288': new Course('java programming (JAVA)', 'Dr.Ajay Tiwari', 'A'),  //2x2 lab 
	'CC3208': new Course('communication Skills (CS)', 'Ms.Soniya Chimnani', 'B'),
	'CC2020': new Course('Advanced ICT tools (ICT)', 'Ms.Sunita gaur', 'D'),
	'CC1905': new Course('Introduction to DBMS (DBMS)', 'Ms.Tarjani Sevak', 'C'),
	'CC2927': new Course('Introduction to Computer Architecture (CA)', 'Mr.Pankaj jagtap', 'E'),
	// ek libarray add krni h isme 
	//  'BC1501': new Course('operating system & PC packages (Pc packages)', 'Dr.Deepika Rai', 'A'),
	//  'BC1102': new Course('Mathematics (Math)', 'Ms. Simran Damodare', 'P'),
	
	// Bachelor of Computer Application Sem 6

	'CB3508': new Course('Introduction to cloud computing (Cloud)', 'Mr.chetan Awasthi', 'A'),
	'CB308': new Course('Introduction to cloud computing (LABCloud)', 'Mr.chetan Awasthi', 'L'),
	'CB3605': new Course('Web technology & Programming (WTP)', 'Ms.Shivranjani verma', 'C'),
	'CB2502': new Course('Fundamentals of Operating Systems (OS)', 'Dr.Deepak Abhyankar', 'D'),
	'CB3929': new Course('Entrepreneurship (Entre)', 'Dr. Ajay chhabria', 'E'),
	'CB3801': new Course('project (project)', 'Mr.Pankaj jagtap', 'S'), 
	

	
	// Master of Computer Application Sem A
	
	'MC4405': new Course('Database Management system (DBMS)', 'Ms.tarjani Sevak', 'B'),
	'MC445': new Course('Database Management system (LABDBMS)', 'Ms.tarjani Sevak', 'L'),
	'MC567': new Course('Internet & web technology (LABJAVA)', 'Mr.Mohit verma', 'N'),
	'MC5617': new Course('Internet & web technology (JAVA)', 'Mr.Mohit verma', 'C'),
	'MC5216': new Course('Design Ananlysis algo (DAA)', 'Dr.Chaitali uikey', 'A'),
	'MC5613': new Course('Computer network (CN)', 'Dr.Preeti saxena', 'D'),
	'MC4305': new Course('Software engeering (SE)', 'Dr.ugrasen Suman', 'E'),
	
	
	
	 /* Master of Computer Application Sem B done*/


	'CS4405': new Course('Database Management system (DBMS)', 'Ms.tarjani Sevak', 'A'),
	'CS204' : new Course('Database Management system (DBMS)', 'Dr.Sanjay tanwani', 'S'),
	'CS44055': new Course('Database Management system (LABDBMS)', 'Ms.tarjani Sevak', 'K'),
	'CS56177': new Course('Internet & web technology (LABJAVA)', 'Mr.Mohit verma', 'L'),
	'CS5617': new Course('Internet & web technology (JAVA)', 'Mr.Mohit verma', 'B'),
	'CS5216': new Course('Design Ananlysis algo (DAA)', 'Dr.Chaitali uikey', 'C'),
	'CS5613': new Course('Computer network (CN)', 'Ms. Minal Nagar', 'D'),
	'CS4305': new Course('Software engeering (SE)', 'Dr.ugrasen Suman', 'E'),
	
	
	// Master of Science Sem 2 done


	'MS4209' : new Course('Data Structure using C++ (DS)', 'Dr.Shraddha Masih', 'A'),
	'MS4209' : new Course('Data Structure using C++ (LABDS)','Dr.Shraddha Masih', 'N'),
	'MS4915' : new Course('Organization & Management Concepts (OMC)', 'Dr.jyoti jadwani', 'B'),
	'MS4405' : new Course('Database Management System (DBMS)', 'Ms.Shivranjani Verma', 'C'), 
	'MS4008' : new Course('Computer Architecture (CA)', 'Mr. Pankaj jagtap','D'),
	'MS4405': new Course('Database Management System (DBMS)', 'Dr.Sanjay Tanwani', 'S'),
	'MS4305' : new Course('Software Engineering (SE)', 'Mr.KL Suryawanshi', 'E'),
	
	
	// Master of Science Sem 4 done


	'SS5216': new Course('Design & Analysis of Algorithm (DAA)', 'Dr.Deepak Abhyankar', 'C'),
	'SS5617': new Course('Internet & Web Technology (IWT)', 'Mr.chetan Awasthi', 'B'),
	'SS52166': new Course('Design & Analysis of Algorithm (LABDAA)', 'Dr.Deepak Abhyankar', 'L'),
	'SS56177': new Course('Internet & Web Technology (LABIWT)', 'Mr.chetan Awasthi', 'P'),
	'SS5216': new Course('Design & Analysis of Algorithm (DAA)', 'Dr.Deepak Abhyankar', 'D'),
	'SS5805': new Course('Final Project (PROJECT)', 'Dr.Chaitali Uikey', 'S'), 
	
	
	
	// Master of Business Administration Sem 2 done


	'MB4405': new Course('Database Management System (DBMS)', 'Ms.Anjali Daman', 'B'),
	'MB5416': new Course('IT Infrastructure Management(ITM) ', 'Mr.Hitesh Ninama', 'A'),
	'MB2301': new Course('Management Information System (MIS)', 'Ms.Sunita Gaur', 'C'),
	'MB44055': new Course('Database Management System (LABDBMS)', 'Ms.Anjali Daman', 'L'),
	'MB4405': new Course('Database Management System (DBMS)', 'Dr.Sanjay Tanwani', 'S'),  
	'MB4305': new Course('Software Engineering (SE)', 'Dr.Archana Thakur', 'D'),
	
	
	
	// Master of Business Administration Sem 4 done

	'BB4422': new Course('ERP Applications (ERP)', 'Dr.Archana Thakur', 'A'), 
	'BB442': new Course('ERP Applications (LABERP)', 'Dr.Archana Thakur', 'P'),
	'BB6313': new Course('Software Testing & Quality (ST&Q)', 'Dr.Nitin Uikey', 'B'), 
	'BB633': new Course('Software Testing & Quality (LABST&Q)', 'Dr.Nitin Uikey', 'K'),
	'BB00': new Course('Project(Project)', 'Dr.Archana Thakur', 'S'),
	
	
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
let colors = [
	'#117733',
	'#44aa99',
	'#d55e00',
	'#88ccee',
	'#0072b2',
	'#ddcc77',
	'#cc6677',
	'#aa4499',
	'#882255',
	'#e69f00'
];
