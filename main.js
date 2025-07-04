function back() {
    mainpage();
}
function n() {
  alert("Under Development.");
}
function mainpage() {
    const mainpage = `
<div class="mainpage">
  <div class="mainpage-body">
    <h1>Learning Materials</h1>
    <p>With Highest Soon!</p>
    <button class="topicBTN" onclick="oralCom()">Oral Communication in Context</button>
    <button class="topicBTN" onclick="empTech()">Empowerment Technologies</button>
    <button class="topicBTN" onclick="genMath()">General Mathematics</button>
    <button class="topicBTN" onclick="FOC()">Fundamentals of Computer</button>
    <button class="topicBTN" onclick="n()">Personal Development</button>
    <button class="topicBTN" onclick="n()">Komunikasyon (Pilipino)</button>
    <button class="topicBTN" onclick="n()">PROGRAMMING 1 - Design Program Logic</button>
    <button class="topicBTN" onclick="n()">Earth & Life Science</button>
    <button class="topicBTN" onclick="n()">PE & Health (HOPE 1)</button>
  </div>
</div>
    `;
    document.getElementById('bodypage').innerHTML = mainpage;
}
function FOC() {
  const FOC = `
<div class="bodypage">
<div class="topic">
  <button class="backBTN" onclick="back()">BACK</button>
  <h1>Fundamentals of Computer</h1>
  <h3>Grade 11 - 1st Semester</h3>
  <h3>Unit 1: Functions and Their Graphs</h3>
  <hr />
  <h2>Lesson 1: Data and Information</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define and differentiate between data and information.</li>
    <li>Understand the characteristics and types of data.</li>
    <li>Explain how data is transformed into useful information.</li>
  </ul>
  <h4>What is Data?</h4>
  <p>
    <strong>Data</strong> refers to raw facts, figures, or symbols that have not yet been processed for meaning. Data can be numbers, letters, images, sounds, or any unprocessed input. It has no context on its own.
  </p>
  <h4>Examples of Data:</h4>
  <ul>
    <li>85, 42, 19 (Numbers without context)</li>
    <li>“John”, “apple”, “blue” (Words without connection)</li>
    <li>10001101 (Binary values)</li>
  </ul>
  <h4>What is Information?</h4>
  <p>
    <strong>Information</strong> is data that has been processed, organized, or structured to provide meaning or value. It is useful for decision-making and communication.
  </p>
  <h4>Examples of Information:</h4>
  <ul>
    <li>“John scored 85 in Mathematics.” (Data with meaning)</li>
    <li>“Blue is the most preferred color among students.”</li>
    <li>“The binary value 10001101 represents the letter ‘M’.”</li>
  </ul>
  <h4>Difference Between Data and Information:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Aspect</th>
      <th>Data</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Definition</td>
      <td>Unprocessed raw facts</td>
      <td>Processed, meaningful output</td>
    </tr>
    <tr>
      <td>Context</td>
      <td>No context or meaning</td>
      <td>Has context and purpose</td>
    </tr>
    <tr>
      <td>Form</td>
      <td>Numbers, text, symbols</td>
      <td>Sentences, reports, charts</td>
    </tr>
    <tr>
      <td>Example</td>
      <td>“42”, “apple”, “blue”</td>
      <td>“The apple weighs 42 grams.”</td>
    </tr>
  </table>
  <h4>Types of Data:</h4>
  <ul>
    <li><strong>Quantitative Data</strong> – Numerical, measurable data (e.g., age, weight, score)</li>
    <li><strong>Qualitative Data</strong> – Descriptive, categorical data (e.g., color, name, status)</li>
  </ul>
  <h4>Data Processing Cycle:</h4>
  <ol>
    <li><strong>Input:</strong> Entering raw data (e.g., typing grades)</li>
    <li><strong>Processing:</strong> Analyzing or computing (e.g., averaging scores)</li>
    <li><strong>Output:</strong> Presenting results (e.g., report card)</li>
    <li><strong>Storage:</strong> Saving data for future use (e.g., database)</li>
  </ol>
  <h4>Importance of Data and Information:</h4>
  <ul>
    <li>Supports decision-making in business, education, and government</li>
    <li>Allows for record-keeping and performance analysis</li>
    <li>Forms the foundation of computing and technology systems</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Data and information are fundamental concepts in computing. While data refers to unprocessed facts, information is the meaningful result after processing. Understanding the distinction helps in analyzing problems, designing systems, and applying IT in real-world scenarios.
  </p>
</div>
<div class="topic">
  <h2>Lesson 2: Characteristics of a Computer</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the basic characteristics that define a computer system.</li>
    <li>Understand how these characteristics make computers effective tools.</li>
    <li>Relate the characteristics of computers to their real-world applications.</li>
  </ul>
  <h4>What Makes a Computer Special?</h4>
  <p>
    Computers are powerful machines because of a set of defining characteristics that make them suitable for various complex tasks. These characteristics are what separate computers from other ordinary devices.
  </p>
  <h4>Key Characteristics of Computers:</h4>
  <ul>
    <li><strong>Speed:</strong> A computer can process data and perform millions of instructions per second. Tasks that take hours manually can be completed in seconds using a computer.</li>
    
    <li><strong>Accuracy:</strong> Computers perform calculations and tasks with a high degree of accuracy. Errors usually occur due to human input, not the machine itself.</li>
    
    <li><strong>Automation:</strong> Once programmed, a computer can perform tasks automatically without user intervention.</li>
    
    <li><strong>Storage:</strong> Computers can store vast amounts of data and information and retrieve them instantly. This includes short-term memory (RAM) and long-term storage (HDD/SSD).</li>
    
    <li><strong>Versatility:</strong> A single computer can perform many different types of tasks — writing, designing, coding, computing, and more.</li>
    
    <li><strong>Diligence:</strong> Unlike humans, computers do not suffer from fatigue or lack of concentration. They can perform repetitive tasks consistently and without rest.</li>
    
    <li><strong>Communication:</strong> Computers can connect and communicate with other computers or devices through the internet, allowing for email, messaging, file transfers, and online collaboration.</li>
    
    <li><strong>Multitasking:</strong> Computers can execute multiple tasks or programs at the same time without affecting performance (within capacity).</li>
  </ul>
  <h4>Comparison Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Characteristic</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Speed</td>
      <td>Performs millions of operations per second</td>
      <td>Calculating payroll in seconds</td>
    </tr>
    <tr>
      <td>Accuracy</td>
      <td>Performs error-free calculations</td>
      <td>Banking software computations</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>Stores and retrieves data instantly</td>
      <td>Cloud file storage</td>
    </tr>
    <tr>
      <td>Automation</td>
      <td>Runs tasks without manual effort</td>
      <td>Scheduled system backups</td>
    </tr>
  </table>
  <h4>Limitations of Computers:</h4>
  <ul>
    <li>Computers do not have intelligence — they rely on human instructions.</li>
    <li>They cannot generate ideas or feelings.</li>
    <li>Errors can happen if wrong data is input or if software has bugs.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Computers are incredibly powerful because of their speed, accuracy, and ability to store, process, and communicate information. Their key characteristics make them indispensable in modern life — from education and business to science and entertainment. However, computers still require human direction and input to function properly.
  </p>
</div>
<div class="topic">
  <h2>Lesson 3: Components of a Computer System</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the major components of a computer system.</li>
    <li>Differentiate between hardware and software.</li>
    <li>Explain how users interact with the system through data and procedures.</li>
  </ul>
  <h4>What is a Computer System?</h4>
  <p>
    A computer system is a combination of hardware, software, data, and users working together to perform computing tasks efficiently. These components must interact correctly to ensure that information is processed and useful output is delivered.
  </p>
  <h4>Main Components of a Computer System:</h4>
  <ol>
    <li><strong>Hardware</strong></li>
    <li><strong>Software</strong></li>
    <li><strong>Data</strong></li>
    <li><strong>People (Users)</strong></li>
    <li><strong>Processes</strong></li>
  </ol>
  <h4>1. Hardware</h4>
  <p>
    Hardware refers to the physical parts of the computer that you can touch and see. These include:
  </p>
  <ul>
    <li><strong>Input Devices:</strong> Keyboard, mouse, scanner, webcam</li>
    <li><strong>Output Devices:</strong> Monitor, printer, speakers</li>
    <li><strong>Processing Unit:</strong> CPU (Central Processing Unit)</li>
    <li><strong>Storage Devices:</strong> Hard drives, SSDs, USB flash drives</li>
    <li><strong>Motherboard and Components:</strong> Connects and controls all parts</li>
  </ul>
  <h4>2. Software</h4>
  <p>
    Software is the set of instructions or programs that tell the hardware what to do. It is divided into two main types:
  </p>
  <ul>
    <li><strong>System Software:</strong> Operating systems (e.g., Windows, Linux), drivers</li>
    <li><strong>Application Software:</strong> Word processors, games, browsers, spreadsheets</li>
  </ul>
  <h4>3. Data</h4>
  <p>
    Data are raw facts or figures entered into the system. When processed, this becomes information. It is the input that computers use to produce output.
  </p>
  <h4>4. People (Users)</h4>
  <p>
    Users are the people who interact with the computer system. They include:
  </p>
  <ul>
    <li><strong>End Users:</strong> Students, professionals, general users</li>
    <li><strong>IT Professionals:</strong> Programmers, technicians, administrators</li>
  </ul>
  <h4>5. Processes</h4>
  <p>
    Processes refer to the instructions that transform data into meaningful information. It includes how tasks are executed step by step.
  </p>
  <h4>Diagram: Components of a Computer System</h4>
  <p>(You may insert a diagram or chart in your HTML project here)</p>
  <h4>Quick Table Summary:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Component</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Hardware</td>
      <td>Physical parts of the computer</td>
      <td>CPU, monitor, keyboard</td>
    </tr>
    <tr>
      <td>Software</td>
      <td>Programs that run the computer</td>
      <td>MS Word, Windows, Chrome</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Input used and processed</td>
      <td>Names, numbers, files</td>
    </tr>
    <tr>
      <td>People</td>
      <td>Users of the system</td>
      <td>Students, IT professionals</td>
    </tr>
    <tr>
      <td>Processes</td>
      <td>Instructions to do tasks</td>
      <td>Calculations, searching</td>
    </tr>
  </table>
  <h4>Summary:</h4>
  <p>
    A complete computer system includes hardware and software working together with data, people, and defined processes. All these components must cooperate to ensure that computing tasks are successful and useful information is produced.
  </p>
</div>
<div class="topic">
  <h2>Lesson 4: Input and Output Devices</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define input and output devices.</li>
    <li>Differentiate between various input and output devices.</li>
    <li>Explain the function of each device in the computer system.</li>
  </ul>
  <h4>What are Input Devices?</h4>
  <p>
    <strong>Input devices</strong> are hardware components used to enter data or instructions into a computer system. They allow users to communicate with the computer.
  </p>
  <h4>Common Input Devices:</h4>
  <ul>
    <li><strong>Keyboard:</strong> Used to type text, numbers, and commands.</li>
    <li><strong>Mouse:</strong> Used to point, click, and navigate graphical interfaces.</li>
    <li><strong>Scanner:</strong> Converts physical documents or images into digital format.</li>
    <li><strong>Microphone:</strong> Captures sound input for recording or communication.</li>
    <li><strong>Webcam:</strong> Captures live video or images.</li>
    <li><strong>Touchscreen:</strong> Functions both as input and display by detecting touch gestures.</li>
  </ul>
  <h4>What are Output Devices?</h4>
  <p>
    <strong>Output devices</strong> are hardware components that present the result of the computer’s processing. These allow users to receive feedback from the computer in various forms.
  </p>
  <h4>Common Output Devices:</h4>
  <ul>
    <li><strong>Monitor:</strong> Displays text, images, and videos visually (also called VDU – Visual Display Unit).</li>
    <li><strong>Printer:</strong> Produces a physical copy (hard copy) of digital documents.</li>
    <li><strong>Speakers:</strong> Output sound, music, or audio effects.</li>
    <li><strong>Projector:</strong> Enlarges computer display onto a screen or surface for presentations.</li>
    <li><strong>Headphones:</strong> Provide personal audio output for private listening.</li>
  </ul>
  <h4>Input vs. Output Summary Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Device</th>
      <th>Type</th>
      <th>Function</th>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td>Input</td>
      <td>Typing characters and commands</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>Input</td>
      <td>Pointing and clicking</td>
    </tr>
    <tr>
      <td>Monitor</td>
      <td>Output</td>
      <td>Displays text and graphics</td>
    </tr>
    <tr>
      <td>Printer</td>
      <td>Output</td>
      <td>Prints digital content to paper</td>
    </tr>
    <tr>
      <td>Microphone</td>
      <td>Input</td>
      <td>Captures sound</td>
    </tr>
    <tr>
      <td>Speakers</td>
      <td>Output</td>
      <td>Plays audio</td>
    </tr>
  </table>
  <h4>Combo Devices (Both Input & Output):</h4>
  <ul>
    <li><strong>Touchscreen:</strong> Accepts input through touch and displays output on the same surface.</li>
    <li><strong>Network Cards:</strong> Send and receive data from networks.</li>
  </ul>
  <h4>Importance of Input and Output Devices:</h4>
  <ul>
    <li>Enable communication between users and the computer.</li>
    <li>Ensure smooth interaction and data flow into and out of the system.</li>
    <li>Support usability and accessibility in both personal and professional computing.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Input and output devices are essential components of any computer system. Input devices allow users to enter data and commands, while output devices present the processed results. Understanding these devices helps users interact effectively with technology in various settings.
  </p>
</div>
<div class="topic">
  <h2>Lesson 5: Storage Devices</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define what storage devices are and explain their function in a computer system.</li>
    <li>Differentiate between primary and secondary storage.</li>
    <li>Identify examples of storage devices and describe their uses.</li>
  </ul>
  <h4>What are Storage Devices?</h4>
  <p>
    <strong>Storage devices</strong> are hardware components used to save data, instructions, and information for short-term or long-term use. They are essential for keeping files, software, and operating systems available for processing and retrieval.
  </p>
  <h4>Two Main Types of Storage:</h4>
  <ol>
    <li><strong>Primary Storage:</strong> Temporary memory used while the computer is running.</li>
    <li><strong>Secondary Storage:</strong> Permanent storage used for long-term data retention.</li>
  </ol>
  <h4>Primary Storage:</h4>
  <ul>
    <li><strong>RAM (Random Access Memory):</strong> Volatile memory that stores data temporarily while a program is running. Data is lost when the computer is turned off.</li>
    <li><strong>ROM (Read-Only Memory):</strong> Non-volatile memory containing essential instructions such as the system’s boot process. Data is permanent and cannot be modified easily.</li>
  </ul>
  <h4>Secondary Storage:</h4>
  <ul>
    <li><strong>Hard Disk Drive (HDD):</strong> Traditional magnetic disk used for storing large amounts of data. Common in desktops and laptops.</li>
    <li><strong>Solid State Drive (SSD):</strong> Faster and more durable storage that uses flash memory instead of spinning disks.</li>
    <li><strong>Optical Drives:</strong> Use CDs, DVDs, or Blu-rays to read/write data using laser technology.</li>
    <li><strong>Flash Drives (USB):</strong> Portable devices that use flash memory for transferring and storing files.</li>
    <li><strong>Memory Cards:</strong> Used in cameras, smartphones, and other portable devices for lightweight storage.</li>
    <li><strong>Cloud Storage:</strong> Online data storage provided by services such as Google Drive, Dropbox, and OneDrive.</li>
  </ul>
  <h4>Comparison Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Storage Type</th>
      <th>Device</th>
      <th>Characteristics</th>
    </tr>
    <tr>
      <td>Primary</td>
      <td>RAM</td>
      <td>Volatile, fast, temporary storage for running programs</td>
    </tr>
    <tr>
      <td>Primary</td>
      <td>ROM</td>
      <td>Non-volatile, permanent startup instructions</td>
    </tr>
    <tr>
      <td>Secondary</td>
      <td>HDD</td>
      <td>Large capacity, slower, moving parts</td>
    </tr>
    <tr>
      <td>Secondary</td>
      <td>SSD</td>
      <td>Faster, no moving parts, more expensive</td>
    </tr>
    <tr>
      <td>Secondary</td>
      <td>Flash Drive</td>
      <td>Portable, plug-and-play storage</td>
    </tr>
    <tr>
      <td>Secondary</td>
      <td>Cloud Storage</td>
      <td>Remote access, depends on internet</td>
    </tr>
  </table>
  <h4>Factors to Consider When Choosing Storage:</h4>
  <ul>
    <li><strong>Capacity:</strong> How much data the device can hold (e.g., GB or TB).</li>
    <li><strong>Speed:</strong> How fast data can be read or written.</li>
    <li><strong>Durability:</strong> How resistant the device is to damage or wear.</li>
    <li><strong>Cost:</strong> Price in relation to performance and capacity.</li>
    <li><strong>Portability:</strong> How easy it is to carry or transfer data.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Storage devices are essential for keeping and retrieving data in a computer system. From fast and temporary memory like RAM to long-term devices like SSDs and cloud storage, each has a specific purpose. Understanding storage helps users manage files and system performance effectively.
  </p>
</div>
<div class="topic">
  <h2>Lesson 6: Software and Its Types</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define software and its role in a computer system.</li>
    <li>Differentiate between system software and application software.</li>
    <li>Identify examples of software used in daily life.</li>
  </ul>
  <h4>What is Software?</h4>
  <p>
    <strong>Software</strong> is a collection of instructions or programs that tell a computer how to operate. Unlike hardware, software cannot be touched — it exists digitally and enables the hardware to perform tasks.
  </p>
  <h4>Two Main Types of Software:</h4>
  <ol>
    <li><strong>System Software</strong></li>
    <li><strong>Application Software</strong></li>
  </ol>
  <h4>1. System Software</h4>
  <p>
    System software manages the computer’s hardware and provides a platform for running application software. It controls system operations and ensures the computer works properly.
  </p>
  <h5>Types of System Software:</h5>
  <ul>
    <li><strong>Operating System (OS):</strong> The main software that manages hardware and software resources. Examples: Windows, macOS, Linux, Android.</li>
    <li><strong>Utility Programs:</strong> Software that helps maintain, analyze, and optimize system performance. Examples: antivirus tools, file managers, disk cleaners.</li>
    <li><strong>Device Drivers:</strong> Programs that allow the operating system to communicate with hardware devices (printers, keyboards, etc.).</li>
    <li><strong>Firmware:</strong> Specialized software embedded in hardware devices to control their functions (e.g., BIOS).</li>
  </ul>
  <h4>2. Application Software</h4>
  <p>
    Application software is designed for end users to perform specific tasks or solve problems. It runs on top of system software and is used for productivity, communication, design, and more.
  </p>
  <h5>Examples of Application Software:</h5>
  <ul>
    <li><strong>Word Processors:</strong> MS Word, Google Docs</li>
    <li><strong>Spreadsheets:</strong> MS Excel, Google Sheets</li>
    <li><strong>Web Browsers:</strong> Google Chrome, Firefox, Safari</li>
    <li><strong>Media Players:</strong> VLC, Windows Media Player</li>
    <li><strong>Design Software:</strong> Adobe Photoshop, Canva</li>
    <li><strong>Communication Tools:</strong> Zoom, Microsoft Teams, Messenger</li>
    <li><strong>Games:</strong> Mobile or desktop games for entertainment</li>
  </ul>
  <h4>Comparison Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Aspect</th>
      <th>System Software</th>
      <th>Application Software</th>
    </tr>
    <tr>
      <td>Purpose</td>
      <td>Manage and operate hardware</td>
      <td>Perform specific tasks for users</td>
    </tr>
    <tr>
      <td>User Interaction</td>
      <td>Low</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td>Windows, Linux, Drivers</td>
      <td>MS Word, Chrome, Photoshop</td>
    </tr>
    <tr>
      <td>Runs On</td>
      <td>Boot level / background</td>
      <td>On top of OS</td>
    </tr>
  </table>
  <h4>Importance of Software:</h4>
  <ul>
    <li>Without software, computers cannot function.</li>
    <li>Software makes it possible to perform a wide variety of tasks — from calculations to communication.</li>
    <li>Custom software can automate work and improve productivity in different industries.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Software brings computers to life by directing hardware to perform tasks. It comes in two main forms: system software that manages the system itself, and application software that allows users to do work or enjoy entertainment. Knowing the difference between them helps users understand how technology supports everyday life.
  </p>
</div>
<div class="topic">
  <h2>Lesson 7: Types of Computers</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Classify computers based on size, purpose, and functionality.</li>
    <li>Differentiate the characteristics of each type of computer.</li>
    <li>Recognize the relevance of various computer types in different industries.</li>
  </ul>
  <h4>What Are the Types of Computers?</h4>
  <p>
    Computers come in various forms depending on their size, power, speed, and purpose. From massive servers that power websites to small handheld devices, each type serves a specific role in our digital world.
  </p>
  <h4>Classification of Computers:</h4>
  <ol>
    <li>Supercomputers</li>
    <li>Mainframe Computers</li>
    <li>Minicomputers</li>
    <li>Microcomputers (Personal Computers)</li>
    <li>Embedded Computers</li>
  </ol>
  <h4>1. Supercomputers</h4>
  <p>
    Supercomputers are the most powerful in terms of processing capacity and speed. They are used for complex scientific calculations, weather forecasting, simulations, and nuclear research.
  </p>
  <ul>
    <li>Very expensive and large in size</li>
    <li>Capable of processing trillions of instructions per second</li>
    <li>Example: IBM Summit, Fugaku</li>
  </ul>
  <h4>2. Mainframe Computers</h4>
  <p>
    Mainframes are high-performance systems used by large organizations for bulk data processing, such as banking, airline reservations, and census data.
  </p>
  <ul>
    <li>Support hundreds or thousands of users simultaneously</li>
    <li>High reliability, security, and uptime</li>
    <li>Example: IBM Z Series</li>
  </ul>
  <h4>3. Minicomputers</h4>
  <p>
    Also known as mid-range computers, minicomputers are less powerful than mainframes but can support multiple users. These were popular in small businesses and departments before personal computers became widespread.
  </p>
  <ul>
    <li>Multi-user systems</li>
    <li>Used for industrial or academic applications</li>
  </ul>
  <h4>4. Microcomputers (Personal Computers)</h4>
  <p>
    Microcomputers are the most common type of computer used today. They are designed for individual use and include desktops, laptops, tablets, and smartphones.
  </p>
  <ul>
    <li>Affordable, portable, and versatile</li>
    <li>Used for education, office work, entertainment, and gaming</li>
    <li>Examples: Laptops, desktops, netbooks, tablets</li>
  </ul>
  <h4>5. Embedded Computers</h4>
  <p>
    Embedded computers are specialized computing systems that are part of a larger machine or device. They perform specific tasks and are found in appliances, vehicles, medical devices, and more.
  </p>
  <ul>
    <li>Not general-purpose — perform only predefined functions</li>
    <li>Examples: Washing machine controllers, ATM systems, microwave processors</li>
  </ul>
  <h4>Comparison Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Type</th>
      <th>Power</th>
      <th>Usage</th>
      <th>Examples</th>
    </tr>
    <tr>
      <td>Supercomputer</td>
      <td>Very High</td>
      <td>Scientific research, weather forecasting</td>
      <td>Fugaku, IBM Summit</td>
    </tr>
    <tr>
      <td>Mainframe</td>
      <td>High</td>
      <td>Banking, big corporations</td>
      <td>IBM Z14</td>
    </tr>
    <tr>
      <td>Minicomputer</td>
      <td>Moderate</td>
      <td>Industry, small businesses</td>
      <td>PDP-11, VAX</td>
    </tr>
    <tr>
      <td>Microcomputer</td>
      <td>General-purpose</td>
      <td>Personal and office use</td>
      <td>Laptops, tablets</td>
    </tr>
    <tr>
      <td>Embedded</td>
      <td>Task-specific</td>
      <td>Appliances, devices</td>
      <td>Routers, smartwatches</td>
    </tr>
  </table>
  <h4>Summary:</h4>
  <p>
    Computers can be classified based on their size and purpose. From supercomputers that solve global problems to microcomputers we use every day, each type plays a role in modern society. Knowing these types helps in choosing the right device for the right task.
  </p>
</div>
<div class="topic">
  <h2>Lesson 8: Classification of Computers by Purpose</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Explain how computers are classified based on purpose.</li>
    <li>Differentiate between general-purpose and special-purpose computers.</li>
    <li>Identify examples of each type in real-life applications.</li>
  </ul>
  <h4>Computer Classification by Purpose:</h4>
  <p>
    Computers can be classified not only by size or performance but also by the purpose they are designed to serve. This classification helps identify how computers are used in various industries and tasks.
  </p>
  <h4>1. General-Purpose Computers</h4>
  <p>
    General-purpose computers are designed to perform a wide variety of tasks. They can be used for word processing, browsing the internet, playing games, creating presentations, and more.
  </p>
  <ul>
    <li>Flexible and adaptable to many tasks through software.</li>
    <li>Used in homes, schools, offices, and businesses.</li>
    <li>Examples: Desktops, laptops, tablets, smartphones</li>
  </ul>
  <h4>2. Special-Purpose Computers</h4>
  <p>
    Special-purpose computers are built to perform one specific task or function. They are not designed for general use but are highly efficient in performing their intended role.
  </p>
  <ul>
    <li>Embedded in machines or devices to control operations.</li>
    <li>Often used in medical, industrial, automotive, and communication systems.</li>
    <li>Examples: ATM machines, GPS systems, MRI scanners, engine control units</li>
  </ul>
  <h4>Key Differences:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Feature</th>
      <th>General-Purpose Computers</th>
      <th>Special-Purpose Computers</th>
    </tr>
    <tr>
      <td>Functionality</td>
      <td>Can perform multiple tasks</td>
      <td>Performs one dedicated task</td>
    </tr>
    <tr>
      <td>Flexibility</td>
      <td>High – adaptable with different software</td>
      <td>Low – fixed to a specific operation</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td>Laptop, desktop, tablet</td>
      <td>ATM, microwave controller, MRI machine</td>
    </tr>
    <tr>
      <td>Used In</td>
      <td>Homes, schools, offices</td>
      <td>Hospitals, industries, appliances</td>
    </tr>
  </table>
  <h4>Why This Classification Matters:</h4>
  <ul>
    <li>Helps in choosing the right type of computer for a specific need.</li>
    <li>Improves efficiency and performance by using the proper device for a task.</li>
    <li>Promotes understanding of how technology supports different sectors.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Computers are classified by purpose into general-purpose and special-purpose types. General-purpose computers are versatile and widely used, while special-purpose computers are focused on a single task and are commonly embedded in systems for specific control or automation. Understanding these types enhances our knowledge of computer applications in everyday life.
  </p>
</div>
<div class="topic">
  <h2>Lesson 9: Basic Troubleshooting and Maintenance</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the importance of computer maintenance and troubleshooting.</li>
    <li>Identify common hardware and software issues.</li>
    <li>Apply basic troubleshooting techniques to solve simple computer problems.</li>
  </ul>
  <h4>What is Troubleshooting?</h4>
  <p>
    <strong>Troubleshooting</strong> is the process of identifying, diagnosing, and resolving problems or issues in a computer system. It involves checking symptoms, finding the root cause, and applying a solution.
  </p>
  <h4>What is Maintenance?</h4>
  <p>
    <strong>Maintenance</strong> refers to the regular activities performed to keep a computer in good working condition. This includes both software and hardware care to prevent issues and extend system life.
  </p>
  <h4>Common Computer Problems:</h4>
  <ul>
    <li>Computer won’t start</li>
    <li>Slow performance</li>
    <li>Software freezing or crashing</li>
    <li>Unusual noise from hardware</li>
    <li>Peripheral devices not working (mouse, keyboard, printer)</li>
    <li>No internet connection</li>
  </ul>
  <h4>Basic Troubleshooting Steps:</h4>
  <ol>
    <li><strong>Identify the Problem:</strong> Observe symptoms and check for error messages.</li>
    <li><strong>Check Hardware Connections:</strong> Ensure cables and power sources are properly connected.</li>
    <li><strong>Restart the System:</strong> Rebooting often resolves minor glitches.</li>
    <li><strong>Check for Software Updates:</strong> Ensure the OS and applications are updated.</li>
    <li><strong>Run Antivirus/Malware Scan:</strong> Check for threats that may affect system performance.</li>
    <li><strong>Use Troubleshooter Tools:</strong> Built-in OS utilities can help resolve common issues.</li>
    <li><strong>Consult Manuals or Online Help:</strong> Look up guides and forums for solutions.</li>
  </ol>
  <h4>Preventive Maintenance Tips:</h4>
  <ul>
    <li>Regularly clean the computer’s exterior and vents.</li>
    <li>Uninstall unused programs to free up space.</li>
    <li>Update antivirus and scan the system regularly.</li>
    <li>Defragment hard drives (HDD only).</li>
    <li>Back up important files frequently.</li>
    <li>Avoid overloading system memory with too many open apps.</li>
    <li>Keep system software and drivers updated.</li>
  </ul>
  <h4>Tools for Maintenance:</h4>
  <ul>
    <li>Disk Cleanup</li>
    <li>Defragment and Optimize Drives</li>
    <li>Task Manager</li>
    <li>System Restore</li>
    <li>Windows Security / Antivirus Software</li>
  </ul>
  <h4>Safety Reminders:</h4>
  <ul>
    <li>Always turn off the computer before cleaning internal parts.</li>
    <li>Use proper tools like anti-static wrist straps when handling hardware.</li>
    <li>Do not attempt to open the computer if you are unsure — ask help from an IT professional.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Troubleshooting and maintenance are essential skills for keeping a computer healthy and functional. With basic knowledge and regular care, users can avoid common issues and extend the lifespan of their devices. Being proactive in maintenance reduces downtime and improves performance.
  </p>
</div>
<div class="topic">
  <h2>Lesson 10: Internet and Web Services</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define the internet and identify its major components.</li>
    <li>Understand the difference between the internet and the World Wide Web (WWW).</li>
    <li>Identify common web services and their functions.</li>
  </ul>
  <h4>What is the Internet?</h4>
  <p>
    The <strong>internet</strong> is a global network of interconnected computers and devices that communicate through standardized protocols. It allows users to access information, communicate, and use online services across the world.
  </p>
  <h4>Major Components of the Internet:</h4>
  <ul>
    <li><strong>Server:</strong> A computer that provides data or services to other computers (clients).</li>
    <li><strong>Client:</strong> A device or software that requests and receives data from a server.</li>
    <li><strong>Router:</strong> A device that directs data between networks and connects devices to the internet.</li>
    <li><strong>ISP (Internet Service Provider):</strong> A company that provides internet access to users.</li>
    <li><strong>IP Address:</strong> A unique identifier assigned to each device connected to a network.</li>
  </ul>
  <h4>Internet vs. World Wide Web (WWW):</h4>
  <p>
    The <strong>Internet</strong> is the global network infrastructure, while the <strong>World Wide Web</strong> is a system of interconnected documents and resources (websites) accessed through the internet.
  </p>
  <ul>
    <li>The Web uses browsers like Chrome, Firefox, or Edge to access information.</li>
    <li>WWW runs on the internet, but the internet also includes email, FTP, VoIP, etc.</li>
  </ul>
  <h4>Common Web Services:</h4>
  <ul>
    <li><strong>Email Services:</strong> Allow users to send and receive electronic messages (e.g., Gmail, Yahoo Mail).</li>
    <li><strong>Web Browsing:</strong> Access websites using browsers (e.g., Google Chrome, Mozilla Firefox).</li>
    <li><strong>Social Networking:</strong> Platforms for social interaction and communication (e.g., Facebook, Instagram).</li>
    <li><strong>Search Engines:</strong> Tools that help find information (e.g., Google, Bing).</li>
    <li><strong>Cloud Storage:</strong> Online space to store and access files (e.g., Google Drive, Dropbox).</li>
    <li><strong>E-commerce:</strong> Buying and selling of goods and services online (e.g., Shopee, Lazada, Amazon).</li>
    <li><strong>Streaming Services:</strong> Watch or listen to media over the internet (e.g., YouTube, Spotify, Netflix).</li>
  </ul>
  <h4>Benefits of Using the Internet:</h4>
  <ul>
    <li>Fast access to information and educational content</li>
    <li>Global communication through messaging, email, and video calls</li>
    <li>Convenience in online shopping, banking, and transactions</li>
    <li>Opportunities for remote work and learning</li>
  </ul>
  <h4>Risks and Precautions:</h4>
  <ul>
    <li>Cybersecurity threats like phishing, viruses, and scams</li>
    <li>Data privacy concerns</li>
    <li>Information overload or exposure to fake news</li>
    <li><strong>Tips:</strong> Use strong passwords, avoid suspicious links, and verify sources</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    The internet is an essential tool for communication, learning, and daily activities. By understanding its components, services, and best practices, users can navigate the digital world effectively and safely.
  </p>
</div>
</div>
  `;
  document.getElementById('bodypage').innerHTML = FOC;
}
function genMath() {
  const genMath = `
<div class="bodypage">
<div class="topic">
  <button class="backBTN" onclick="back()">BACK</button>
  <h1>General Mathematics</h1>
  <h3>Grade 11 - 1st Semester</h3>
  <h3>Unit 1: Functions and Their Graphs</h3>
  <hr />
  <h2>Lesson 1: Definitions and Types of Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define a function and distinguish it from general relations.</li>
    <li>Identify different types of mathematical functions.</li>
    <li>Use function notation correctly and represent functions in multiple forms.</li>
  </ul>
  <h4>What is a Function?</h4>
  <p>
    A <strong>function</strong> is a special relationship where each input (x-value) has exactly one output (y-value). It maps elements from a domain to a range in such a way that no input is assigned to more than one output.
  </p>
  <h4>Example of a Function:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Input (x)</th>
      <th>Output (f(x))</th>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>3</td>
      <td>6</td>
    </tr>
  </table>
  <p>Each input has one output → ✔️ This is a function.</p>
  <h4>Not a Function:</h4>
  <p>If a single input corresponds to multiple outputs, it is <strong>not</strong> a function.</p>
  <pre>
Input: 1 → 2  
       1 → 3  
→ ❌ Not a function
  </pre>
  <h4>Function Notation:</h4>
  <p>
    A function is usually written as <code>f(x)</code>, which means "function of x."  
    Example: <code>f(x) = 2x + 1</code> means for every value of x, multiply by 2 and add 1.
  </p>
  <h4>Ways to Represent Functions:</h4>
  <ul>
    <li>Set of ordered pairs: <code>{(1,2), (2,4), (3,6)}</code></li>
    <li>Table of values</li>
    <li>Mapping diagram</li>
    <li>Graph on a coordinate plane</li>
    <li>Algebraic equation</li>
  </ul>
  <h4>Vertical Line Test:</h4>
  <p>
    A graph represents a function if no vertical line intersects it at more than one point.  
    This is called the <strong>vertical line test</strong>.
  </p>
  <h4>Types of Functions:</h4>
  <ul>
    <li><strong>Linear Function:</strong> Graph is a straight line (e.g., <code>f(x) = 3x + 2</code>)</li>
    <li><strong>Quadratic Function:</strong> Graph is a parabola (e.g., <code>f(x) = x² - 1</code>)</li>
    <li><strong>Absolute Value Function:</strong> Graph is a V-shape (e.g., <code>f(x) = |x|</code>)</li>
    <li><strong>Piecewise Function:</strong> Defined by different expressions depending on input value</li>
    <li><strong>Constant Function:</strong> Always returns the same value (e.g., <code>f(x) = 5</code>)</li>
  </ul>
  <h4>Examples in Daily Life:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Situation</th>
      <th>Function?</th>
      <th>Explanation</th>
    </tr>
    <tr>
      <td>Each student has one ID number</td>
      <td>Yes</td>
      <td>1 student = 1 ID → Function</td>
    </tr>
    <tr>
      <td>1 ID number belongs to multiple students</td>
      <td>No</td>
      <td>1 input → many outputs → Not a function</td>
    </tr>
    <tr>
      <td>Price of an item based on weight</td>
      <td>Yes</td>
      <td>Each weight has a set price</td>
    </tr>
  </table>
  <h4>Key Reminders:</h4>
  <ul>
    <li>All functions are relations, but not all relations are functions.</li>
    <li>Check each input for multiple outputs — that breaks a function.</li>
    <li>Functions can be visual, verbal, algebraic, or tabular.</li>
    <li>Use function notation to simplify mathematical writing.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    A function is a mathematical rule that assigns a single output to each input. Understanding the types, representations, and behavior of functions is the foundation for studying algebra and higher-level math concepts.
  </p>
</div>
<div class="topic">
  <h2>Lesson 2: Domain and Range</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define and determine the domain and range of a function.</li>
    <li>Identify restrictions in the domain based on the function's rule.</li>
    <li>Represent domain and range in set, inequality, and interval notation.</li>
  </ul>
  <h4>What is Domain?</h4>
  <p>
    The <strong>domain</strong> of a function is the set of all possible input values (x-values) for which the function is defined. These are the values you can plug into the function without breaking any mathematical rule (like dividing by zero or taking the square root of a negative number).
  </p>
  <h4>What is Range?</h4>
  <p>
    The <strong>range</strong> is the set of all possible output values (y-values) that result from using the values in the domain. It represents what the function produces.
  </p>
  <h4>Example 1:</h4>
  <p><code>f(x) = x + 3</code></p>
  <ul>
    <li>Domain: All real numbers (ℝ) — you can plug in any number.</li>
    <li>Range: All real numbers (ℝ) — the output can be any number too.</li>
  </ul>
  <h4>Example 2:</h4>
  <p><code>f(x) = 1 / (x - 2)</code></p>
  <ul>
    <li>You cannot divide by 0, so x cannot be 2.</li>
    <li><strong>Domain:</strong> All real numbers except 2 → <code>x ≠ 2</code></li>
    <li><strong>Range:</strong> All real numbers except 0 (the output will never be 0)</li>
  </ul>
  <h4>Example 3:</h4>
  <p><code>f(x) = √(x - 1)</code></p>
  <ul>
    <li>You cannot take the square root of a negative number (in real numbers).</li>
    <li><strong>Domain:</strong> x ≥ 1</li>
    <li><strong>Range:</strong> y ≥ 0</li>
  </ul>
  <h4>Ways to Express Domain and Range:</h4>
  <ul>
    <li><strong>Set Notation:</strong> D = {x | x ≠ 2}</li>
    <li><strong>Inequality:</strong> x > 0, x ≤ 5, etc.</li>
    <li><strong>Interval Notation:</strong>
      <ul>
        <li><code>(−∞, ∞)</code> → all real numbers</li>
        <li><code>[1, ∞)</code> → from 1 to infinity, including 1</li>
        <li><code>(−∞, 0)</code> → less than 0, excluding 0</li>
      </ul>
    </li>
  </ul>
  <h4>Visual Example (Table):</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Function</th>
      <th>Domain</th>
      <th>Range</th>
    </tr>
    <tr>
      <td><code>f(x) = x²</code></td>
      <td>All real numbers</td>
      <td>y ≥ 0</td>
    </tr>
    <tr>
      <td><code>f(x) = 1/x</code></td>
      <td>x ≠ 0</td>
      <td>y ≠ 0</td>
    </tr>
    <tr>
      <td><code>f(x) = √x</code></td>
      <td>x ≥ 0</td>
      <td>y ≥ 0</td>
    </tr>
  </table>
  <h4>Real-Life Applications:</h4>
  <ul>
    <li><strong>Fuel Consumption:</strong> The domain could be distance (can’t be negative), and the range could be fuel used.</li>
    <li><strong>Bank Account:</strong> You can’t withdraw more than your balance → range is limited by your account.</li>
  </ul>
  <h4>Key Reminders:</h4>
  <ul>
    <li>Check for restrictions like square roots and denominators when finding domain.</li>
    <li>Use graphs to help visualize the range.</li>
    <li>Always answer using the appropriate notation: set, interval, or inequality.</li>
  </ul>

  <h4>Summary:</h4>
  <p>
    The domain and range of a function define the limits of its input and output. They are essential in understanding where a function is valid and what it can produce. Being able to identify and express these helps in interpreting real-world situations mathematically.
  </p>
</div>
<div class="topic">
  <h2>Lesson 3: Evaluating Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Substitute input values into function expressions.</li>
    <li>Correctly evaluate the value of a function for a given input.</li>
    <li>Apply function evaluation in real-life word problems.</li>
  </ul>
  <h4>What Does it Mean to Evaluate a Function?</h4>
  <p>
    To <strong>evaluate a function</strong> means to substitute a specific value for the variable (usually x) in the function and then simplify the expression to find the output (f(x)).
  </p>
  <h4>Function Notation Review:</h4>
  <p>
    Function notation is written as <code>f(x)</code>, which means "the function of x".  
    Example: <code>f(x) = 3x + 2</code>  
    This means: take any value of x, multiply it by 3, and then add 2.
  </p>
  <h4>Example 1:</h4>
  <p>Given: <code>f(x) = 2x + 5</code></p>
  <ul>
    <li>Find <code>f(3)</code></li>
    <li>Solution: <code>f(3) = 2(3) + 5 = 6 + 5 = 11</code></li>
    <li>Answer: <code>f(3) = 11</code></li>
  </ul>
  <h4>Example 2:</h4>
  <p>Given: <code>g(x) = x² - 4x + 1</code></p>
  <ul>
    <li>Find <code>g(2)</code></li>
    <li>Solution: <code>g(2) = (2)² - 4(2) + 1 = 4 - 8 + 1 = -3</code></li>
    <li>Answer: <code>g(2) = -3</code></li>
  </ul>
  <h4>Example 3:</h4>
  <p>Given: <code>h(x) = √(x + 1)</code></p>
  <ul>
    <li>Find <code>h(8)</code></li>
    <li>Solution: <code>h(8) = √(8 + 1) = √9 = 3</code></li>
    <li>Answer: <code>h(8) = 3</code></li>
  </ul>
  <h4>Real-Life Problem Example:</h4>
  <p>A delivery fee function is defined as <code>d(x) = 45 + 8x</code>, where x is the number of kilometers traveled.</p>
  <ul>
    <li>How much will it cost to deliver over 5 kilometers?</li>
    <li>Solution: <code>d(5) = 45 + 8(5) = 45 + 40 = 85</code></li>
    <li>Answer: The delivery cost is ₱85</li>
  </ul>
  <h4>Practice Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Function</th>
      <th>Input (x)</th>
      <th>f(x)</th>
    </tr>
    <tr>
      <td><code>f(x) = x²</code></td>
      <td>4</td>
      <td>16</td>
    </tr>
    <tr>
      <td><code>g(x) = 2x - 1</code></td>
      <td>10</td>
      <td>19</td>
    </tr>
    <tr>
      <td><code>h(x) = x/3</code></td>
      <td>9</td>
      <td>3</td>
    </tr>
  </table>
  <h4>Common Mistakes to Avoid:</h4>
  <ul>
    <li>Forgetting to use parentheses when substituting negative values</li>
    <li>Not applying exponents before multiplication</li>
    <li>Confusing the function name with multiplication (e.g., <code>f(x)</code> is not "f times x")</li>
  </ul>
  <h4>Key Reminders:</h4>
  <ul>
    <li>Always replace x with the given number and follow PEMDAS rules.</li>
    <li>Use a calculator for complex values or decimal results.</li>
    <li>Make sure the value is within the domain of the function before evaluating.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Evaluating a function means plugging in values and simplifying to find the result. This helps in real-world applications like cost, time, population, and profit computations. Mastery of this skill is essential in using functions effectively.
  </p>
</div>
<div class="topic">
  <h2>Lesson 4: Piecewise Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the concept and definition of piecewise functions.</li>
    <li>Interpret and evaluate piecewise-defined functions.</li>
    <li>Graph piecewise functions based on their rules and domains.</li>
  </ul>
  <h4>What is a Piecewise Function?</h4>
  <p>
    A <strong>piecewise function</strong> is a function that is defined by different expressions or rules for different parts of its domain. Each "piece" of the function applies only to specific values of the input.
  </p>
  <h4>Real-Life Analogy:</h4>
  <p>
    Think of delivery fees where different pricing rules apply depending on distance. For example:  
    - For 0–5 km: ₱50  
    - For 6–10 km: ₱70  
    - For 11+ km: ₱100  
    Each range has its own rule — that’s how a piecewise function works.
  </p>
  <h4>Example of a Piecewise Function:</h4>
  <pre>
f(x) = {
  x + 2   if x &lt; 0  
  x²      if 0 ≤ x ≤ 3  
  5       if x &gt; 3
}
  </pre>
  <h4>How to Evaluate Piecewise Functions:</h4>
  <p>
    Step 1: Look at the value of x.  
    Step 2: Determine which piece of the function applies to that x-value.  
    Step 3: Plug the value into the correct equation.
  </p>
  <h4>Example:</h4>
  <pre>
Given:
f(x) = {
  x + 2   if x &lt; 0  
  x²      if 0 ≤ x ≤ 3  
  5       if x &gt; 3
}
Find f(-2), f(2), f(4)
→ f(-2): Use x + 2 → f(-2) = -2 + 2 = 0  
→ f(2): Use x² → f(2) = 2² = 4  
→ f(4): Use 5 → f(4) = 5
  </pre>
  <h4>Graphing a Piecewise Function:</h4>
  <p>
    - Graph each equation separately over its given interval.<br>
    - Use <strong>open circle</strong> (○) if the endpoint is not included.<br>
    - Use <strong>closed circle</strong> (●) if the endpoint is included.
  </p>
  <h4>Visual Example (Table):</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>x</th>
      <th>f(x)</th>
      <th>Which Rule?</th>
    </tr>
    <tr>
      <td>-3</td>
      <td>-1</td>
      <td>x + 2</td>
    </tr>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>x²</td>
    </tr>
    <tr>
      <td>5</td>
      <td>5</td>
      <td>Constant 5</td>
    </tr>
  </table>
  <h4>Common Applications:</h4>
  <ul>
    <li>Tax computations (different rates for income ranges)</li>
    <li>Shipping fees by distance or weight</li>
    <li>Speed regulations (e.g., school zone rules)</li>
  </ul>
  <h4>Key Reminders:</h4>
  <ul>
    <li>Only one rule applies for each input.</li>
    <li>Check the inequality symbols carefully (≤, &lt;, ≥, &gt;).</li>
    <li>Use tables to organize values when graphing.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Piecewise functions use different rules for different parts of the domain. These are used in real-world situations with step-based pricing or rules. Understanding how to evaluate and graph them is essential in applying math to practical situations.
  </p>
</div>
<div class="topic">
  <h2>Lesson 5: Graphs of Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the graphical representation of common functions.</li>
    <li>Plot and analyze the shape and characteristics of different types of functions.</li>
    <li>Interpret key features of a function's graph such as intercepts, domain, range, and symmetry.</li>
  </ul>
  <h4>What is a Graph of a Function?</h4>
  <p>
    A function’s graph is a visual representation of all the ordered pairs (x, f(x)) that satisfy the function. It allows us to see the behavior of a function — how it increases or decreases, where it intercepts the axes, and whether it is linear, quadratic, or otherwise.
  </p>
  <h4>Common Function Graphs:</h4>
  <ul>
    <li><strong>Linear Function:</strong> <code>f(x) = mx + b</code>  
      - Graph: A straight line  
      - m = slope, b = y-intercept  
      - Domain and range: All real numbers</li>
    <li><strong>Quadratic Function:</strong> <code>f(x) = ax² + bx + c</code>  
      - Graph: A parabola  
      - Opens upward if a > 0, downward if a < 0  
      - Vertex is the highest or lowest point</li>
    <li><strong>Absolute Value Function:</strong> <code>f(x) = |x|</code>  
      - Graph: A "V" shape  
      - Vertex at origin (0,0)  
      - Symmetric about the y-axis</li>
    <li><strong>Constant Function:</strong> <code>f(x) = c</code>  
      - Graph: A horizontal line  
      - y-value is constant regardless of x</li>
  </ul>
  <h4>Key Features of Graphs:</h4>
  <ul>
    <li><strong>X-intercept:</strong> Point where the graph crosses the x-axis (f(x) = 0)</li>
    <li><strong>Y-intercept:</strong> Point where the graph crosses the y-axis (x = 0)</li>
    <li><strong>Symmetry:</strong> Is the graph mirrored about the y-axis or origin?</li>
    <li><strong>End behavior:</strong> What happens to f(x) as x → ±∞?</li>
    <li><strong>Intervals:</strong> Where is the function increasing or decreasing?</li>
  </ul>
  <h4>Example: Graph of f(x) = 2x + 1</h4>
  <ul>
    <li>This is a linear function.</li>
    <li>Slope (m) = 2, Y-intercept (b) = 1</li>
    <li>Graph passes through (0,1) and rises 2 units for every 1 unit increase in x</li>
  </ul>
  <h4>Example: Graph of f(x) = x² - 4</h4>
  <ul>
    <li>This is a quadratic function (parabola).</li>
    <li>Vertex: (0, -4)</li>
    <li>Opens upward</li>
    <li>X-intercepts: Solve x² - 4 = 0 → x = ±2</li>
  </ul>
  <h4>Graphing Tips:</h4>
  <ul>
    <li>Make a table of values for x and calculate f(x)</li>
    <li>Plot at least 5 points to get an accurate shape</li>
    <li>Check symmetry (especially for parabolas or absolute values)</li>
    <li>Label axes and intercepts clearly</li>
  </ul>
  <h4>Graph Interpretation Practice Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Function</th>
      <th>Type</th>
      <th>Graph Shape</th>
    </tr>
    <tr>
      <td><code>f(x) = x</code></td>
      <td>Linear</td>
      <td>Straight Line</td>
    </tr>
    <tr>
      <td><code>f(x) = x²</code></td>
      <td>Quadratic</td>
      <td>Parabola</td>
    </tr>
    <tr>
      <td><code>f(x) = |x|</code></td>
      <td>Absolute Value</td>
      <td>V-shape</td>
    </tr>
    <tr>
      <td><code>f(x) = 5</code></td>
      <td>Constant</td>
      <td>Horizontal Line</td>
    </tr>
  </table>
  <h4>Common Mistakes to Avoid:</h4>
  <ul>
    <li>Forgetting to use enough points when plotting</li>
    <li>Incorrect placement of intercepts or vertex</li>
    <li>Confusing shape of different functions (e.g., linear vs. quadratic)</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Graphs provide a powerful way to visualize functions and understand their behavior. Knowing how to identify, plot, and analyze function graphs helps in problem-solving, data interpretation, and modeling real-life scenarios.
  </p>
</div>
<div class="topic">
  <h2>Lesson 6: Transformations of Functions</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify and describe different types of transformations on function graphs.</li>
    <li>Apply transformations such as translations, reflections, and scaling to function equations.</li>
    <li>Sketch graphs of transformed functions.</li>
  </ul>
  <h4>What are Transformations of Functions?</h4>
  <p>
    Transformations are changes made to the graph of a function. These changes can move the graph up, down, left, or right; flip it over an axis; or stretch/compress it.
  </p>
  <h4>Types of Transformations:</h4>
  <ul>
    <li><strong>Translation:</strong> Shifting the graph without changing its shape.</li>
    <li><strong>Reflection:</strong> Flipping the graph across an axis.</li>
    <li><strong>Stretch/Compression (Scaling):</strong> Making the graph taller, shorter, wider, or narrower.</li>
  </ul>
  <h4>1. Translations</h4>
  <ul>
    <li><strong>Vertical Shift:</strong> <code>f(x) + c</code> moves the graph up if c > 0, down if c < 0</li>
    <li><strong>Horizontal Shift:</strong> <code>f(x − c)</code> moves the graph right if c > 0, left if c < 0</li>
  </ul>
  <h4>Example:</h4>
  <ul>
    <li><code>f(x) = x²</code> → original parabola</li>
    <li><code>f(x) = x² + 3</code> → moves up 3 units</li>
    <li><code>f(x) = (x − 2)²</code> → moves right 2 units</li>
  </ul>
  <h4>2. Reflections</h4>
  <ul>
    <li><strong>Over x-axis:</strong> <code>−f(x)</code> → flips the graph upside down</li>
    <li><strong>Over y-axis:</strong> <code>f(−x)</code> → mirrors the graph left to right</li>
  </ul>
  <h4>Example:</h4>
  <ul>
    <li><code>f(x) = x³</code></li>
    <li><code>−f(x) = −x³</code> → reflected over x-axis</li>
    <li><code>f(−x) = (−x)³ = −x³</code> → also reflects over y-axis</li>
  </ul>
  <h4>3. Vertical & Horizontal Stretch/Compression</h4>
  <ul>
    <li><strong>Vertical Stretch:</strong> <code>a · f(x)</code> where a > 1 → graph becomes taller</li>
    <li><strong>Vertical Compression:</strong> <code>a · f(x)</code> where 0 < a < 1 → graph becomes shorter</li>
    <li><strong>Horizontal Stretch/Compression:</strong> <code>f(bx)</code> where b > 1 compresses, 0 < b < 1 stretches</li>
  </ul>
  <h4>Example:</h4>
  <ul>
    <li><code>f(x) = x²</code></li>
    <li><code>2f(x) = 2x²</code> → vertical stretch (taller parabola)</li>
    <li><code>0.5f(x) = 0.5x²</code> → vertical compression (wider parabola)</li>
    <li><code>f(2x) = (2x)² = 4x²</code> → horizontal compression</li>
  </ul>
  <h4>Combined Transformations:</h4>
  <p>
    Multiple transformations can be combined in one function.<br>
    Example: <code>y = −2(x − 3)² + 1</code>
  </p>
  <ul>
    <li>Shift right 3 units</li>
    <li>Reflect over x-axis</li>
    <li>Vertical stretch by 2</li>
    <li>Shift up 1 unit</li>
  </ul>
  <h4>Quick Transformation Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Equation</th>
      <th>Transformation</th>
    </tr>
    <tr>
      <td><code>f(x) + 4</code></td>
      <td>Up 4 units</td>
    </tr>
    <tr>
      <td><code>f(x − 3)</code></td>
      <td>Right 3 units</td>
    </tr>
    <tr>
      <td><code>−f(x)</code></td>
      <td>Reflect over x-axis</td>
    </tr>
    <tr>
      <td><code>f(−x)</code></td>
      <td>Reflect over y-axis</td>
    </tr>
    <tr>
      <td><code>2f(x)</code></td>
      <td>Vertical stretch</td>
    </tr>
    <tr>
      <td><code>f(0.5x)</code></td>
      <td>Horizontal stretch</td>
    </tr>
  </table>
  <h4>Key Reminders:</h4>
  <ul>
    <li>Do transformations step-by-step if more than one is applied.</li>
    <li>Use tables and graphs to double-check changes.</li>
    <li>Follow correct order: inside changes (horizontal) → outside changes (vertical).</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Transformations change the position and shape of a function's graph. Understanding how each transformation affects the function allows for more flexible graphing and function manipulation.
  </p>
<div class="topic">
<pre>
Unit 1: Functions and their Graphs
1. Definitions and Types of Functions
2. Domain and Range
3. Evaluating Functions
4. Piecewise Functions
5. Graphs of Functions
6. Transformations of Functions

Unit 2: Business Mathematics (Interest)
7. Simple Interest
8. Compound Interest
9. Applications of Interest in Loans and Investments

Unit 3: Business Mathematics (Annuities & Installments)
10. Annuities – Ordinary & Due
11. Present Value and Future Value
12. Installment Buying and Amortization

Unit 4: Logic and Reasoning
13. Introduction to Logic
14. Logical Operators (AND, OR, NOT)
15. Truth Tables and Validity
16. Logical Arguments and Fallacies

Unit 5: Mathematics of Consumer Life
17. Discount, Commission, and Taxes
18. Percentage and Mark-up
19. Income, Budgeting, and Personal Finance

</pre>
</div>
</div>
</div>
  `;
  document.getElementById('bodypage').innerHTML = genMath;
}
function empTech() {
  const empTech = `
<div class="bodypage">
<div class="topic">
  <button class="backBTN" onclick="back()">BACK</button>
  <h1>Empowerment Technologies</h1>
  <h3>Grade 11 - 2nd Semester</h3>
  <p>(no official Empowerment Technologies lessons in 1st Semester under DepEd’s Senior High School curriculum)</p>
  <hr />
  <h2>Lesson 1: Information and Communication Technology (ICT) in the 21st Century</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define ICT and its components.</li>
    <li>Understand how ICT has transformed the modern world.</li>
    <li>Identify the uses and importance of ICT in various sectors.</li>
  </ul>
  <h4>What is ICT?</h4>
  <p>
    <strong>Information and Communication Technology (ICT)</strong> refers to technologies that provide access to information through telecommunications.
    It includes the internet, wireless networks, cell phones, computers, software, social media, and other digital platforms.
  </p>
  <h4>Evolution of ICT:</h4>
  <ul>
    <li><strong>1st Generation:</strong> Basic computing – calculators, early PCs</li>
    <li><strong>2nd Generation:</strong> Personal computers, office software (MS Office)</li>
    <li><strong>3rd Generation:</strong> Internet access, websites, emails</li>
    <li><strong>4th Generation:</strong> Mobile devices, cloud computing, social media</li>
    <li><strong>5th Generation:</strong> Artificial Intelligence, IoT, 5G networks</li>
  </ul>
  <h4>ICT in Daily Life:</h4>
  <ul>
    <li><strong>Communication:</strong> Chat apps, email, video conferencing</li>
    <li><strong>Education:</strong> Online classes, e-learning platforms (e.g., Google Classroom)</li>
    <li><strong>Business:</strong> E-commerce, inventory systems, digital marketing</li>
    <li><strong>Government:</strong> Online forms, e-Government services (e.g., PSA, SSS portals)</li>
    <li><strong>Entertainment:</strong> Streaming, social media, games</li>
  </ul>
  <h4>ICT in the Philippines:</h4>
  <p>
    The Philippines is known as the “<strong>Social Media Capital of the World</strong>” due to the high usage of platforms like Facebook and TikTok.
    The country is also a top location for <strong>BPO (Business Process Outsourcing)</strong> services — a major economic contributor.
  </p>
  <h4>Trends and Innovations in ICT:</h4>
  <ul>
    <li>Cloud computing</li>
    <li>Wearable technology</li>
    <li>Big data</li>
    <li>Mobile technologies</li>
    <li>Artificial Intelligence and machine learning</li>
  </ul>
  <h4>Benefits of ICT:</h4>
  <ul>
    <li>Faster and more effective communication</li>
    <li>Improved access to education and information</li>
    <li>Automation of tasks and increase in productivity</li>
    <li>Enhanced global connectivity</li>
  </ul>
  <h4>Challenges of ICT:</h4>
  <ul>
    <li>Cybersecurity threats and data privacy issues</li>
    <li>Digital divide — not everyone has equal access</li>
    <li>Dependence on technology can reduce face-to-face interaction</li>
    <li>Online misinformation and cyberbullying</li>
  </ul>
  <h4>Key Terms:</h4>
  <ul>
    <li><strong>ICT:</strong> Use of digital technology to manage and communicate information</li>
    <li><strong>Digital Divide:</strong> Gap between those who have access to technology and those who do not</li>
    <li><strong>BPO:</strong> Business Process Outsourcing — companies outsourcing work (like customer service) to other countries</li>
    <li><strong>Cloud Computing:</strong> Accessing files or software over the internet instead of from a local computer</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    ICT plays a vital role in modern society — from communication to education, governance to business.
    As the world becomes more digital, understanding ICT helps us become more productive, informed, and connected.
  </p>
</div>
<div class="topic">
  <h2>Lesson 2: Online Safety, Security, Ethics & Etiquete</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the risks and threats of using the internet.</li>
    <li>Practice ethical behavior and proper etiquette online.</li>
    <li>Apply safety and security measures in digital environments.</li>
  </ul>
  <h4>What is Online Safety?</h4>
  <p>
    Online safety refers to the protection of personal information and behavior while using the internet. It includes protecting your identity, avoiding scams, and being aware of digital threats.
  </p>
  <h4>Common Online Threats:</h4>
  <ul>
    <li><strong>Phishing:</strong> Fake emails or websites that steal login info or bank details.</li>
    <li><strong>Malware:</strong> Harmful software like viruses, trojans, and spyware.</li>
    <li><strong>Identity Theft:</strong> Using someone else’s personal info without permission.</li>
    <li><strong>Scams and Fraud:</strong> Fake offers or sellers that steal money.</li>
    <li><strong>Cyberbullying:</strong> Using digital platforms to harass or intimidate others.</li>
  </ul>
  <h4>Online Security Measures:</h4>
  <ul>
    <li>Use strong, unique passwords and change them regularly.</li>
    <li>Install and update antivirus software.</li>
    <li>Enable two-factor authentication (2FA).</li>
    <li>Avoid clicking on suspicious links or attachments.</li>
    <li>Always log out after using public/shared devices.</li>
    <li>Keep personal information private on social media.</li>
  </ul>
  <h4>What is Digital Ethics?</h4>
  <p>
    Digital ethics is the responsible use of technology. It includes respecting others' privacy, intellectual property, and being honest and fair online.
  </p>
  <h4>Examples of Ethical Behavior Online:</h4>
  <ul>
    <li>Giving credit when using someone’s work (e.g., citing sources).</li>
    <li>Not spreading false information.</li>
    <li>Respecting the privacy of others (e.g., not sharing personal content without consent).</li>
    <li>Reporting abuse or harmful content.</li>
  </ul>
  <h4>What is Netiquette?</h4>
  <p>
    <strong>Netiquette</strong> is short for "internet etiquette." It is the set of rules for polite and respectful communication online.
  </p>
  <h4>Basic Rules of Netiquette:</h4>
  <ul>
    <li>Be respectful in messages, posts, and comments.</li>
    <li>Avoid using ALL CAPS (it sounds like shouting).</li>
    <li>Think before you post — everything online can be permanent.</li>
    <li>Avoid spamming or flooding chats.</li>
    <li>Use proper language and grammar when needed.</li>
    <li>Respect differences in opinion.</li>
  </ul>
  <h4>Online Citizenship:</h4>
  <p>
    A responsible online user is called a **digital citizen**. Practicing online safety, ethics, and etiquette helps maintain a healthy and respectful digital world.
  </p>
  <h4>Summary:</h4>
  <p>
    The internet is powerful but also risky. Knowing how to protect yourself and others — by being safe, secure, respectful, and ethical — is essential for students and professionals in the 21st century.
  </p>
</div>
<div class="topic">
  <h2>Lesson 3: Productivity Tools</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify common productivity tools used for word processing, spreadsheets, and presentations.</li>
    <li>Understand the functions and uses of productivity software.</li>
    <li>Demonstrate basic skills in using Microsoft Office or Google Workspace tools.</li>
  </ul>
  <h4>What Are Productivity Tools?</h4>
  <p>
    Productivity tools are applications that help users create documents, calculate data, present information, and manage tasks efficiently. The most common productivity tools are:
  </p>
  <ul>
    <li><strong>Word Processors</strong> – for typing, editing, and formatting text (e.g., MS Word, Google Docs)</li>
    <li><strong>Spreadsheets</strong> – for organizing and calculating data (e.g., MS Excel, Google Sheets)</li>
    <li><strong>Presentation Tools</strong> – for visual slide presentations (e.g., MS PowerPoint, Google Slides)</li>
  </ul>
  <h4>1. Word Processing Tools</h4>
  <p>
    These tools are used to create written documents such as reports, letters, and essays.
  </p>
  <h5>Common Features:</h5>
  <ul>
    <li>Text formatting (font style, size, color)</li>
    <li>Paragraph alignment, bullets, and numbering</li>
    <li>Inserting images, tables, and hyperlinks</li>
    <li>Spelling and grammar checker</li>
  </ul>
  <h5>Examples of Use:</h5>
  <ul>
    <li>Creating an academic report</li>
    <li>Writing a formal letter</li>
    <li>Making a résumé or job application</li>
  </ul>
  <h4>2. Spreadsheet Tools</h4>
  <p>
    Spreadsheets are used for handling numerical data, making calculations, and creating data tables.
  </p>
  <h5>Common Features:</h5>
  <ul>
    <li>Rows and columns for organizing data</li>
    <li>Mathematical formulas and functions (e.g., SUM, AVERAGE, IF)</li>
    <li>Chart creation (bar, line, pie charts)</li>
    <li>Conditional formatting</li>
  </ul>
  <h5>Examples of Use:</h5>
  <ul>
    <li>Budget planning</li>
    <li>Inventory tracking</li>
    <li>Grade computation</li>
  </ul>
  <h4>3. Presentation Tools</h4>
  <p>
    Presentation software allows users to create visual aids for speeches or reports using slides.
  </p>
  <h5>Common Features:</h5>
  <ul>
    <li>Slide templates and themes</li>
    <li>Text boxes and bullet points</li>
    <li>Images, videos, and transitions</li>
    <li>Animations and slide timing</li>
  </ul>
  <h5>Examples of Use:</h5>
  <ul>
    <li>Oral reports and class presentations</li>
    <li>Business proposals or pitches</li>
    <li>Seminar or workshop materials</li>
  </ul>
  <h4>Other Digital Productivity Tools:</h4>
  <ul>
    <li><strong>Note-taking apps:</strong> Google Keep, Notion, OneNote</li>
    <li><strong>Task managers:</strong> Trello, Todoist, Asana</li>
    <li><strong>Collaboration tools:</strong> Google Workspace, Microsoft Teams</li>
  </ul>
  <h4>Tips for Using Productivity Tools Effectively:</h4>
  <ul>
    <li>Learn keyboard shortcuts to save time.</li>
    <li>Organize files and folders logically.</li>
    <li>Use cloud storage for backup and access anywhere.</li>
    <li>Review spelling and formatting before sharing documents.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Productivity tools are essential for students and professionals alike. By mastering word processors, spreadsheets, and presentation software, you can communicate ideas, manage data, and present information efficiently and effectively.
  </p>
</div>
<div class="topic">
  <h2>Lesson 4: Imaging and Design for the Online Environment</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the principles of design and visual communication.</li>
    <li>Learn the basic concepts of image editing and digital design tools.</li>
    <li>Apply design elements and techniques to create visual content for online platforms.</li>
  </ul>
  <h4>What is Imaging and Design?</h4>
  <p>
    Imaging and design involve creating or editing visual content such as graphics, photos, posters, infographics, and more — often used in websites, social media, or digital campaigns.
    Design enhances communication by using visuals that are appealing, meaningful, and easy to understand.
  </p>
  <h4>Principles of Design:</h4>
  <ul>
    <li><strong>Balance:</strong> Equal distribution of visual weight (symmetrical/asymmetrical).</li>
    <li><strong>Contrast:</strong> Difference in color, size, shape, or texture to highlight important elements.</li>
    <li><strong>Emphasis:</strong> Making one part of the design stand out.</li>
    <li><strong>Repetition:</strong> Reusing elements to create unity and consistency.</li>
    <li><strong>Alignment:</strong> Proper placement of elements to create order.</li>
    <li><strong>Proximity:</strong> Grouping related items together to show connection.</li>
  </ul>
  <h4>Elements of Design:</h4>
  <ul>
    <li><strong>Line:</strong> Used to separate content, direct attention, or create shapes.</li>
    <li><strong>Shape:</strong> Geometric or organic forms used to create visual interest.</li>
    <li><strong>Color:</strong> Sets the tone, emotion, and theme of the design.</li>
    <li><strong>Texture:</strong> Gives a surface feel — real or implied — to an image.</li>
    <li><strong>Space:</strong> Refers to the area between and around elements.</li>
    <li><strong>Typography:</strong> The style, arrangement, and appearance of text.</li>
  </ul>
  <h4>File Formats for Online Images:</h4>
  <ul>
    <li><strong>JPEG (.jpg):</strong> Best for photos and realistic images; small file size.</li>
    <li><strong>PNG (.png):</strong> Supports transparency; good for graphics and logos.</li>
    <li><strong>GIF (.gif):</strong> For simple animations and low-color graphics.</li>
    <li><strong>SVG (.svg):</strong> Scalable Vector Graphics, ideal for responsive web design.</li>
  </ul>
  <h4>Popular Tools for Image Editing and Design:</h4>
  <ul>
    <li><strong>Canva:</strong> User-friendly design tool for creating posters, infographics, and social media content.</li>
    <li><strong>Adobe Photoshop:</strong> Industry-standard for professional image editing.</li>
    <li><strong>Pixlr:</strong> Free browser-based editor with advanced features.</li>
    <li><strong>GIMP:</strong> Open-source alternative to Photoshop.</li>
  </ul>
  <h4>Tips for Designing Effective Online Content:</h4>
  <ul>
    <li>Keep it simple and focused.</li>
    <li>Use high-quality images and consistent color schemes.</li>
    <li>Make sure text is readable and clear.</li>
    <li>Align content properly — avoid clutter.</li>
    <li>Test responsiveness across devices (mobile, tablet, desktop).</li>
  </ul>
  <h4>Example Design Projects:</h4>
  <ul>
    <li>Creating a banner for a school event</li>
    <li>Designing a personal logo</li>
    <li>Editing a social media post template</li>
    <li>Making an infographic about ICT tools</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Digital imaging and design play a key role in communication today. By understanding design principles and using the right tools, you can create visually effective content that grabs attention and delivers your message clearly — perfect for websites, projects, and digital platforms.
  </p>
</div>
<div class="topic">
  <h2>Lesson 5: Web Design with HTML and CSS</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the structure and role of HTML and CSS in web design.</li>
    <li>Create basic web pages using HTML elements and CSS styling.</li>
    <li>Apply design principles in layout, formatting, and responsiveness.</li>
  </ul>
  <h4>What is Web Design?</h4>
  <p>
    Web design is the process of creating the layout, visual appearance, and usability of a website. It includes the use of <strong>HTML</strong> (Hypertext Markup Language) for structure and <strong>CSS</strong> (Cascading Style Sheets) for styling.
  </p>
  <h4>What is HTML?</h4>
  <p>
    <strong>HTML</strong> is the standard markup language used to create web pages. It defines the structure of content by using tags.
  </p>
  <h5>Basic HTML Structure:</h5>
  <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Website&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome to My Page&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
  </pre>
  <h5>Common HTML Tags:</h5>
  <ul>
    <li><code>&lt;h1&gt; to &lt;h6&gt;</code> – Headings</li>
    <li><code>&lt;p&gt;</code> – Paragraph</li>
    <li><code>&lt;a href=""&gt;</code> – Hyperlink</li>
    <li><code>&lt;img src=""&gt;</code> – Image</li>
    <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> – Lists</li>
    <li><code>&lt;div&gt;</code> – Division/container</li>
  </ul>
  <h4>What is CSS?</h4>
  <p>
    <strong>CSS</strong> is a stylesheet language used to describe the presentation of HTML elements — such as colors, layouts, and fonts. CSS separates content from design.
  </p>
  <h5>Basic CSS Syntax:</h5>
  <pre>
selector {
  property: value;
}
  </pre>

  <h5>Example:</h5>
  <pre>
p {
  color: blue;
  font-size: 16px;
}
  </pre>
  <h4>Ways to Apply CSS:</h4>
  <ul>
    <li><strong>Inline:</strong> inside HTML element (not recommended for full sites)</li>
    <li><strong>Internal:</strong> within &lt;style&gt; tag in the &lt;head&gt;</li>
    <li><strong>External:</strong> separate .css file (recommended)</li>
  </ul>
  <h4>Basic Layout Concepts:</h4>
  <ul>
    <li><strong>Box Model:</strong> Content → Padding → Border → Margin</li>
    <li><strong>Flexbox/Grid:</strong> Used for flexible layouts and responsive design</li>
    <li><strong>Media Queries:</strong> CSS rules based on screen size for responsive design</li>
  </ul>
  <h4>Example: Simple Web Page</h4>
  <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;style&gt;
    body {
      background-color: #f0f0f0;
      font-family: Arial;
    }
    h1 {
      color: navy;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;My First Website&lt;/h1&gt;
  &lt;p&gt;This is an example of HTML with CSS.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
  </pre>
  <h4>Design Tips:</h4>
  <ul>
    <li>Keep your layout clean and simple.</li>
    <li>Use a readable font and consistent color scheme.</li>
    <li>Organize your content using sections and containers.</li>
    <li>Test your website on different screen sizes.</li>
    <li>Write semantic HTML for accessibility and SEO.</li>
  </ul>
  <h4>Tools for Web Design:</h4>
  <ul>
    <li>Text Editors: VS Code, Sublime Text, Notepad++</li>
    <li>Design: Figma, Canva, Adobe XD</li>
    <li>Testing: Browser Developer Tools, Lighthouse, Responsively App</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    HTML and CSS are foundational skills for creating websites. HTML structures the content, while CSS makes it visually appealing. With practice, you can build responsive and engaging websites for school projects or personal portfolios.
  </p>
</div>
<div class="topic">
  <h2>Lesson 6: Interactive Multimedia</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Define multimedia and its components.</li>
    <li>Understand how multimedia becomes interactive.</li>
    <li>Create and evaluate simple interactive multimedia content.</li>
  </ul>
  <h4>What is Multimedia?</h4>
  <p>
    <strong>Multimedia</strong> is any content that combines different forms of media such as text, images, audio, video, and animation to communicate information or tell a story.
  </p>
  <h5>Types of Media:</h5>
  <ul>
    <li><strong>Text:</strong> Written content like paragraphs, headlines, and labels.</li>
    <li><strong>Image:</strong> Photographs, graphics, drawings, and illustrations.</li>
    <li><strong>Audio:</strong> Voice narration, music, sound effects.</li>
    <li><strong>Video:</strong> Moving visuals, real-time or pre-recorded clips.</li>
    <li><strong>Animation:</strong> Moving graphics or illustrations, including motion effects.</li>
  </ul>
  <h4>What is Interactive Multimedia?</h4>
  <p>
    Interactive multimedia allows users to engage with digital content by clicking, touching, or navigating. It’s not just for viewing or listening — it involves participation.
  </p>
  <h5>Examples of Interactive Multimedia:</h5>
  <ul>
    <li>Educational games and simulations</li>
    <li>Interactive websites and quizzes</li>
    <li>Infographics with clickable sections</li>
    <li>Apps with audio/video feedback</li>
    <li>Virtual tours (e.g., 360° walkthroughs)</li>
  </ul>
  <h4>Advantages of Interactive Multimedia:</h4>
  <ul>
    <li>Increases user engagement and participation</li>
    <li>Improves understanding and retention of information</li>
    <li>Provides instant feedback to learners</li>
    <li>Encourages exploration and discovery</li>
  </ul>
  <h4>Uses of Interactive Multimedia:</h4>
  <ul>
    <li><strong>Education:</strong> E-learning modules, virtual labs</li>
    <li><strong>Entertainment:</strong> Video games, digital storytelling</li>
    <li><strong>Business:</strong> Product demos, marketing presentations</li>
    <li><strong>Tourism:</strong> Interactive maps, VR exhibits</li>
  </ul>
  <h4>Tools for Creating Multimedia:</h4>
  <ul>
    <li>Canva – for static visuals and simple animations</li>
    <li>PowerPoint – for interactive slideshows</li>
    <li>Adobe Animate or After Effects – for motion graphics</li>
    <li>Genially – for interactive infographics and quizzes</li>
    <li>Scratch – for basic interactive games</li>
  </ul>
  <h4>Best Practices in Designing Interactive Multimedia:</h4>
  <ul>
    <li>Start with clear learning or communication goals.</li>
    <li>Keep the interface user-friendly and intuitive.</li>
    <li>Use high-quality media elements.</li>
    <li>Provide clear instructions and navigation buttons.</li>
    <li>Test functionality and accessibility on different devices.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Interactive multimedia enhances digital content by combining multiple media types with user interactivity. It's a powerful tool in education, marketing, and entertainment — enabling learners and users to actively engage with content and deepen their experience.
  </p>
</div>
<div class="topic">
  <h2>Lesson 7: Platforms for ICT Content Development</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the different platforms for developing digital content.</li>
    <li>Understand the purpose and features of content development tools.</li>
    <li>Select appropriate platforms for specific ICT tasks and projects.</li>
  </ul>
  <h4>What is a Platform?</h4>
  <p>
    A <strong>platform</strong> is a software or service that provides tools and environments for creating, publishing, and managing digital content. Platforms help individuals and organizations deliver content efficiently — whether for learning, business, or entertainment.
  </p>
  <h4>Types of ICT Content Development Platforms:</h4>
  <h5>1. Social Media Platforms</h5>
  <ul>
    <li>Used for sharing content like photos, videos, and blog posts.</li>
    <li>Examples: Facebook, Instagram, TikTok, Twitter, YouTube</li>
    <li>Best for: marketing, personal branding, awareness campaigns</li>
  </ul>
  <h5>2. Blogging and Website Platforms</h5>
  <ul>
    <li>Allow users to publish written articles, media, and information online.</li>
    <li>Examples: WordPress, Blogger, Wix, Weebly</li>
    <li>Best for: publishing educational content, news, personal websites</li>
  </ul>
  <h5>3. Content Management Systems (CMS)</h5>
  <ul>
    <li>Software used to manage and organize large amounts of digital content.</li>
    <li>Examples: Joomla, Drupal, WordPress (with plugins)</li>
    <li>Best for: schools, businesses, or e-commerce websites</li>
  </ul>
  <h5>4. Multimedia and Design Platforms</h5>
  <ul>
    <li>Used for creating images, infographics, videos, and animations.</li>
    <li>Examples: Canva, Adobe Creative Cloud, Figma, Piktochart</li>
    <li>Best for: visual content creation, digital campaigns</li>
  </ul>
  <h5>5. Learning Management Systems (LMS)</h5>
  <ul>
    <li>Platforms for delivering e-learning and online training materials.</li>
    <li>Examples: Google Classroom, Moodle, Edmodo</li>
    <li>Best for: managing lessons, assessments, and student progress</li>
  </ul>
  <h5>6. E-Commerce Platforms</h5>
  <ul>
    <li>Enable users to build online stores and sell products/services.</li>
    <li>Examples: Shopify, WooCommerce, Lazada, Shopee</li>
    <li>Best for: online selling, product promotion, managing orders</li>
  </ul>
  <h5>7. Communication & Collaboration Tools</h5>
  <ul>
    <li>Support teamwork and remote interaction.</li>
    <li>Examples: Google Workspace (Docs, Drive, Meet), Microsoft Teams, Zoom</li>
    <li>Best for: group projects, document sharing, virtual meetings</li>
  </ul>
  <h4>Factors to Consider When Choosing a Platform:</h4>
  <ul>
    <li><strong>Purpose:</strong> What content do you want to develop?</li>
    <li><strong>Ease of Use:</strong> Is the platform user-friendly?</li>
    <li><strong>Features:</strong> Does it support the tools you need?</li>
    <li><strong>Cost:</strong> Is it free or paid?</li>
    <li><strong>Accessibility:</strong> Can others view or collaborate easily?</li>
  </ul>
  <h4>Best Practices for Content Development:</h4>
  <ul>
    <li>Plan your content (goal, audience, message).</li>
    <li>Use a consistent visual style and tone.</li>
    <li>Keep it simple, relevant, and engaging.</li>
    <li>Use original or properly credited resources.</li>
    <li>Test and evaluate your content before publishing.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Platforms for ICT content development empower individuals to create, share, and manage digital materials for communication, education, marketing, and collaboration. Choosing the right platform depends on your goals, technical skills, and target audience.
  </p>
</div>
<div class="topic">
  <h2>Lesson 8: Web Page Design Using Templates</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand the use and purpose of web templates.</li>
    <li>Customize existing templates to create simple web pages.</li>
    <li>Apply good design principles while using web templates.</li>
  </ul>
  <h4>What is a Web Template?</h4>
  <p>
    A <strong>web template</strong> is a pre-designed webpage or set of HTML, CSS, and image files used to create websites easily. It provides a basic layout and design so users can simply customize the content without starting from scratch.
  </p>
  <h4>Benefits of Using Web Templates:</h4>
  <ul>
    <li>Saves time and effort in designing from the ground up</li>
    <li>Provides professional-looking layouts</li>
    <li>Easy to edit using HTML and CSS knowledge</li>
    <li>Responsive and mobile-ready in most cases</li>
    <li>Great for beginners in web development</li>
  </ul>
  <h4>Common Template Sources:</h4>
  <ul>
    <li>HTML5 UP (html5up.net)</li>
    <li>Colorlib (colorlib.com)</li>
    <li>BootstrapMade (bootstrapmade.com)</li>
    <li>W3Schools Templates</li>
    <li>GitHub Repositories</li>
  </ul>
  <h4>Basic Steps to Use a Template:</h4>
  <ol>
    <li>Download the template (ZIP file or source files)</li>
    <li>Extract and open in a code editor (like VS Code)</li>
    <li>Identify which files to edit: typically <code>index.html</code> and <code>style.css</code></li>
    <li>Replace content such as headings, paragraphs, and images</li>
    <li>Modify colors, fonts, and layout as needed using CSS</li>
    <li>Save and test the webpage in a browser</li>
  </ol>
  <h4>Tips When Editing Templates:</h4>
  <ul>
    <li>Always keep a backup copy before making changes</li>
    <li>Understand the layout structure first (use comments)</li>
    <li>Check for mobile responsiveness</li>
    <li>Use meaningful content and images</li>
    <li>Validate HTML and CSS using online tools</li>
  </ul>
  <h4>Example: Editing a Simple Template</h4>
  <p>Suppose a template has this line in the HTML:</p>
  <pre>
&lt;h1&gt;Welcome to My Website&lt;/h1&gt;
  </pre>
  <p>You can change it to:</p>
  <pre>
&lt;h1&gt;Jasmine’s Portfolio&lt;/h1&gt;
  </pre>
  <p>And update the style in CSS:</p>
  <pre>
h1 {
  color: #4CAF50;
  font-family: 'Poppins', sans-serif;
}
  </pre>
  <h4>Design Principles to Remember:</h4>
  <ul>
    <li><strong>Consistency:</strong> Fonts, colors, and spacing should be uniform</li>
    <li><strong>Readability:</strong> Use simple and clean text styles</li>
    <li><strong>Visual Hierarchy:</strong> Emphasize headings and important info</li>
    <li><strong>Responsiveness:</strong> Ensure your template adjusts to all devices</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Web templates are a helpful starting point for designing web pages quickly and effectively. With basic knowledge of HTML and CSS, students can customize templates to reflect their personal style or project requirements while applying proper design principles.
  </p>
</div>
<div class="topic">
  <h2>Lesson 9: ICT Project for Social Change</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Understand how ICT can be used to promote positive change in society.</li>
    <li>Identify real-life ICT-based projects that address social issues.</li>
    <li>Plan and develop a simple ICT project proposal for social awareness or action.</li>
  </ul>
  <h4>What is ICT for Social Change?</h4>
  <p>
    <strong>ICT for Social Change</strong> refers to the use of digital tools, platforms, and technologies to raise awareness, solve problems, or support advocacy for the betterment of society. Students, communities, and organizations can use websites, social media, multimedia, and apps to influence change and promote meaningful causes.
  </p>
  <h4>Examples of ICT for Social Good:</h4>
  <ul>
    <li><strong>Websites</strong> promoting mental health awareness</li>
    <li><strong>Campaign videos</strong> against bullying or discrimination</li>
    <li><strong>Social media pages</strong> supporting environmental causes</li>
    <li><strong>Mobile apps</strong> for disaster alerts or donation drives</li>
    <li><strong>Infographics</strong> about public health and safety</li>
  </ul>
  <h4>Common Social Issues You Can Address:</h4>
  <ul>
    <li>Poverty and hunger</li>
    <li>Climate change and environmental care</li>
    <li>Health and wellness education</li>
    <li>Cyberbullying and digital responsibility</li>
    <li>Women’s rights, child protection, equality</li>
  </ul>
  <h4>ICT Tools You Can Use:</h4>
  <ul>
    <li>Google Sites or WordPress – for making informational websites</li>
    <li>Canva or Adobe Spark – for posters, infographics, and digital campaigns</li>
    <li>YouTube or TikTok – for creating awareness videos</li>
    <li>Facebook, Instagram, Twitter – for social media advocacy</li>
    <li>Scratch or MIT App Inventor – for simple apps and interactive content</li>
  </ul>
  <h4>Steps in Planning an ICT Project:</h4>
  <ol>
    <li><strong>Identify a relevant issue or problem</strong> in your community or country.</li>
    <li><strong>Set objectives</strong> – what do you want to achieve?</li>
    <li><strong>Choose your platform</strong> (website, video, infographic, app, etc.)</li>
    <li><strong>Plan your content</strong> – visuals, text, and message</li>
    <li><strong>Design and create</strong> your digital content using ICT tools</li>
    <li><strong>Share and promote</strong> the project through appropriate channels</li>
  </ol>
  <h4>Project Sample Ideas:</h4>
  <ul>
    <li>A website educating students on cyber safety</li>
    <li>A short video about environmental protection</li>
    <li>A Facebook campaign promoting kindness and mental health</li>
    <li>An infographic explaining how to reduce plastic use</li>
    <li>An app that alerts users about local community programs or donations</li>
  </ul>
  <h4>Tips for Effective ICT Projects:</h4>
  <ul>
    <li>Keep your message clear and easy to understand</li>
    <li>Use visuals to engage your audience</li>
    <li>Ensure facts and data are accurate</li>
    <li>Make your project interactive if possible</li>
    <li>Promote your project to reach more people</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    ICT empowers students like you to create powerful projects that inspire change and promote awareness. Whether through websites, videos, or online campaigns, your voice and creativity can help solve social problems and encourage responsible digital citizenship.
  </p>
</div>
<div class="topic">
  <h2>Lesson 10: Final ICT Project Presentation</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Present a well-planned ICT project that addresses a real-world issue.</li>
    <li>Demonstrate effective communication and digital content creation skills.</li>
    <li>Apply best practices in project development and evaluation.</li>
  </ul>
  <h4>Purpose of the Final ICT Project:</h4>
  <p>
    The final ICT project is your chance to showcase everything you’ve learned in Empowerment Technologies. It is a practical application of using digital tools and platforms to promote social change, raise awareness, or provide a solution to a community problem.
  </p>
  <h4>What You Need to Prepare:</h4>
  <ul>
    <li>A completed ICT project (website, infographic, video, app, etc.)</li>
    <li>A short written report or proposal explaining your project</li>
    <li>A presentation for the class (PowerPoint, website walkthrough, or video)</li>
  </ul>
  <h4>Presentation Guidelines:</h4>
  <ol>
    <li><strong>Title Slide:</strong> Project name, your name, date, and section</li>
    <li><strong>Introduction:</strong> What is your project about? What problem does it solve?</li>
    <li><strong>Objectives:</strong> What did you aim to achieve?</li>
    <li><strong>Target Audience:</strong> Who will benefit from your project?</li>
    <li><strong>Process:</strong> How did you create it? What tools and platforms did you use?</li>
    <li><strong>Output:</strong> Show the actual product — walk through your website, video, design, etc.</li>
    <li><strong>Reflection:</strong> What challenges did you face and how did you overcome them?</li>
    <li><strong>Conclusion:</strong> How can this project help others or be improved further?</li>
  </ol>
  <h4>Tips for a Good Presentation:</h4>
  <ul>
    <li>Practice speaking clearly and confidently</li>
    <li>Use visuals to support your explanation</li>
    <li>Be honest and proud of your effort — even simple projects can have big impact</li>
    <li>Keep your presentation within 5–7 minutes</li>
    <li>Be ready to answer questions from your teacher or classmates</li>
  </ul>
  <h4>Project Evaluation Criteria (Example):</h4>
  <ul>
    <li><strong>Content and Relevance (30%)</strong> – Clear message, useful, and socially relevant</li>
    <li><strong>Creativity and Design (20%)</strong> – Visually appealing, well-designed, original</li>
    <li><strong>Technical Execution (20%)</strong> – Proper use of ICT tools, good functionality</li>
    <li><strong>Presentation (20%)</strong> – Clear explanation, organized, confident delivery</li>
    <li><strong>Teamwork / Effort (10%)</strong> – Collaboration, research, planning</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    Your final ICT project is more than a school requirement — it's a chance to make a difference using your digital skills. Whether it’s a campaign, website, or app, your project reflects your creativity, empathy, and understanding of how technology can empower others.
  </p>
</div>
</div>
  `;
  document.getElementById('bodypage').innerHTML = empTech
}
function oralCom() {
    const oralCom = `
<div class="bodypage">
<div class="topic">
    <button class="backBTN" onclick="back()">BACK</button>
    <h1>Oral Communication in Context</h1>
    <h3>Grade 11 - 1st Semester</h3>
    <h3>Unit 1: The Nature & Elements of Communication</h3>
    <hr />
    <h2>Lesson 1: Nature and Importance of Communication</h2>
    <h4>Learning Objectives:</h4>
    <ul>
      <li>Define communication and understand its essential role in human interaction.</li>
      <li>Recognize the importance of communication in academic, personal, and professional settings.</li>
    </ul>
    <h4>What is Communication?</h4>
    <p>
      Communication is the process of sending and receiving messages between two or more people with the purpose of being understood. It involves sharing ideas, thoughts, emotions, and information using spoken or written words, gestures, symbols, facial expressions, and body language.
    </p>
    <h4>Nature of Communication:</h4>
    <ul>
      <li><strong>Communication is a Process</strong> – It occurs in stages: from sender to message to receiver and feedback, continuously.</li>
      <li><strong>Communication is Dynamic</strong> – It constantly changes based on context, mood, and situation.</li>
      <li><strong>Communication is Systemic</strong> – It is influenced by environment, culture, social roles, and setting.</li>
      <li><strong>Communication is Symbolic</strong> – It uses language, signs, gestures, and other symbols to convey meaning.</li>
      <li><strong>Communication is Interactive</strong> – It involves active exchange between sender and receiver, including response or feedback.</li>
    </ul>
    <h4>Importance of Communication:</h4>
    <ul>
      <li><strong>Academic Importance:</strong> Helps in effective class participation, presentations, and collaboration in group activities.</li>
      <li><strong>Personal Importance:</strong> Strengthens relationships, helps express emotions, and avoids misunderstandings.</li>
      <li><strong>Professional Importance:</strong> Vital for teamwork, customer interaction, meetings, job interviews, and leadership.</li>
    </ul>
    <h4>Forms of Communication:</h4>
    <ul>
      <li><strong>Verbal:</strong> Spoken words or oral language.</li>
      <li><strong>Non-verbal:</strong> Gestures, facial expressions, tone of voice, body movement.</li>
      <li><strong>Written:</strong> Messages through letters, texts, emails, or printed documents.</li>
      <li><strong>Visual:</strong> Use of charts, symbols, pictures, or other imagery to communicate.</li>
    </ul>
    <h4>Examples of Communication in Daily Life:</h4>
    <table border="1" cellpadding="8">
      <tr>
        <th>Situation</th>
        <th>Type of Communication</th>
      </tr>
      <tr>
        <td>Talking to a friend</td>
        <td>Verbal / Interpersonal</td>
      </tr>
      <tr>
        <td>Sending a text message</td>
        <td>Written / Digital</td>
      </tr>
      <tr>
        <td>Presenting in class</td>
        <td>Public Speaking</td>
      </tr>
      <tr>
        <td>Smiling at someone</td>
        <td>Non-verbal / Emotional</td>
      </tr>
    </table>
    <h4>Key Reminders:</h4>
    <ul>
      <li>Communication is not only what you say, but how you say it.</li>
      <li>Listening is just as important as speaking.</li>
      <li>Good communication builds connection, trust, and understanding.</li>
      <li>Breakdowns happen when messages are unclear or misunderstood.</li>
    </ul>
    <h4>Summary:</h4>
    <p>
      Communication is an essential skill in all aspects of life. It is a continuous and interactive process that helps people share ideas, emotions, and intentions. Understanding the nature and importance of communication builds stronger relationships, improves learning, and prepares students for future careers.
    </p>
</div>
<div class="topic">
    <h2>Lesson 2: Elements of Communication</h2>
    <h4>Learning Objectives:</h4>
    <ul>
      <li>Identify and define the elements involved in the communication process.</li>
      <li>Explain the role of each element in effective communication.</li>
    </ul>
    <h4>What are the Elements of Communication?</h4>
    <p>
    Communication involves several key components that work together to ensure a message is delivered and understood. These are called the <strong>elements of communication</strong>. Each element plays a specific role in the process.
    </p>
    <h4>Elements of the Communication Process:</h4>
    <ol>
      <li><strong>Sender (Source/Encoder):</strong> The person who creates and delivers the message. The sender encodes (converts thoughts into words or symbols).</li>
      <li><strong>Message:</strong> The information, idea, or emotion that is being communicated.</li>
      <li><strong>Encoding:</strong> The process of converting thoughts or feelings into verbal or non-verbal symbols.</li>
      <li><strong>Channel:</strong> The medium or method used to send the message (e.g., spoken word, written text, gesture, email).</li>
      <li><strong>Receiver (Decoder):</strong> The person who gets the message and interprets it.</li>
     <li><strong>Decoding:</strong> The process of interpreting or making sense of the message.</li>
      <li><strong>Feedback:</strong> The response given by the receiver to the sender. It tells the sender whether the message was understood.</li>
      <li><strong>Noise:</strong> Any barrier or interference that affects the clarity or accuracy of the message (e.g., distractions, language differences, emotional state).</li>
      <li><strong>Context:</strong> The situation or environment where communication takes place (e.g., classroom, workplace, online).</li>
    </ol>
    <h4>Illustration of the Process:</h4>
    <p>
      <em>Sender → Encoding → Message → Channel → Receiver → Decoding → Feedback</em><br>
    (All happening within a specific <strong>Context</strong>, possibly affected by <strong>Noise</strong>)
    </p>
    <h4>Example:</h4>
    <p>
      <strong>Scenario:</strong> A student giving a classroom report.  
      <br><strong>Sender:</strong> The student  
      <br><strong>Message:</strong> Report content  
      <br><strong>Encoding:</strong> Organizing ideas into speech  
      <br><strong>Channel:</strong> Verbal/oral (speech)  
      <br><strong>Receiver:</strong> Classmates and teacher  
      <br><strong>Decoding:</strong> Listeners interpret the report  
      <br><strong>Feedback:</strong> Nods, questions, comments  
      <br><strong>Noise:</strong> Classmates talking, unclear voice  
      <br><strong>Context:</strong> Inside the classroom  
    </p>
    <h4>Importance of Each Element:</h4>
    <ul>
      <li>All elements must work together for communication to succeed.</li>
      <li>A failure or weakness in one element (e.g., unclear message or distracted listener) may cause a communication breakdown.</li>
      <li>Being aware of these elements helps improve your communication skills in both academic and real-world settings.</li>
    </ul>
    <h4>Summary:</h4>
    <p>
    The communication process involves a sender, message, channel, receiver, feedback, and is influenced by noise and context. Understanding each element allows us to express ourselves clearly and avoid breakdowns in communication.
    </p>
</div>
<div class="topic">
  <h2>Lesson 3: Models of Communication</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the different models of communication.</li>
    <li>Compare the features and flow of communication in each model.</li>
    <li>Recognize the strengths and limitations of each model.</li>
  </ul>
  <h4>What is a Communication Model?</h4>
  <p>
    A <strong>communication model</strong> is a visual or symbolic representation of the communication process.  
    Models help us understand how communication works by identifying its components, flow, and possible breakdowns.
  </p>
  <h4>Types of Communication Models:</h4>
  <ol>
    <li><strong>Linear Model</strong> (One-Way)</li>
    <li><strong>Interactive Model</strong> (Two-Way with Feedback)</li>
    <li><strong>Transactional Model</strong> (Simultaneous Exchange)</li>
  </ol>
  <h3>1. Linear Model of Communication</h3>
  <p>
    The **Linear Model** describes communication as a one-way process. The sender transmits a message through a channel to the receiver.  
    <br><br>
    <strong>Example:</strong> A radio announcer delivering news to the public.
  </p>
  <p><strong>Key Components:</strong> Sender → Message → Channel → Receiver</p>
  <p><strong>Limitation:</strong> No feedback; the receiver is passive.</p>
  <h3>2. Interactive Model of Communication</h3>
  <p>
    The **Interactive Model** introduces feedback and context. After receiving a message, the receiver sends a response.  
    <br><br>
    <strong>Example:</strong> An online chat where users take turns replying.
  </p>
  <p><strong>Key Components:</strong> Sender → Message → Receiver → Feedback (with context)</p>
  <p><strong>Strength:</strong> Recognizes the role of feedback.</p>
  <p><strong>Limitation:</strong> Feedback is still not simultaneous; it’s turn-based.</p>
  <h3>3. Transactional Model of Communication</h3>
  <p>
    The **Transactional Model** sees communication as a continuous and simultaneous process. Both participants are sender and receiver at the same time.  
    <br><br>
    <strong>Example:</strong> A face-to-face conversation where both people give and receive cues at once (verbal and non-verbal).
  </p>
  <p><strong>Key Features:</strong></p>
  <ul>
    <li>Simultaneous sending and receiving of messages</li>
    <li>Includes context, noise, and feedback</li>
    <li>Considers body language, tone, facial expressions</li>
  </ul>
  <p><strong>Strength:</strong> Most realistic model for real-world interaction</p>
  <h4>Comparison Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Model</th>
      <th>Direction</th>
      <th>Feedback</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Linear</td>
      <td>One-way</td>
      <td>No</td>
      <td>TV Broadcast</td>
    </tr>
    <tr>
      <td>Interactive</td>
      <td>Two-way (alternating)</td>
      <td>Yes</td>
      <td>Email exchange</td>
    </tr>
    <tr>
      <td>Transactional</td>
      <td>Two-way (simultaneous)</td>
      <td>Yes (real-time)</td>
      <td>Face-to-face talk</td>
    </tr>
  </table>
  <h4>Why Models Matter:</h4>
  <ul>
    <li>They simplify complex processes.</li>
    <li>Help us analyze communication in different settings.</li>
    <li>Assist in identifying where breakdowns happen.</li>
  </ul>
  <h4>Summary:</h4>
  <p>
    The Linear, Interactive, and Transactional Models each provide a different view of communication. Understanding all three helps us improve how we send and receive messages in academic, personal, and professional situations.
  </p>
</div>
<div class="topic">
  <h2>Lesson 4: Functions of Communication</h2>
  <h4>Learning Objectives:</h4>
  <ul>
    <li>Identify the major functions of communication.</li>
    <li>Explain how communication serves personal, academic, and social purposes.</li>
    <li>Demonstrate how each function is applied in real-life situations.</li>
  </ul>
  <h4>What Are the Functions of Communication?</h4>
  <p>
    Communication serves many purposes in our daily lives. These are called the <strong>functions of communication</strong>. Each function shows a reason why we communicate — whether to express ideas, influence others, build relationships, or understand ourselves.
  </p>
  <h4>Main Functions of Communication:</h4>
  <ol>
    <li><strong>Regulation and Control</strong></li>
    <li><strong>Social Interaction</strong></li>
    <li><strong>Motivation</strong></li>
    <li><strong>Information Dissemination</strong></li>
    <li><strong>Emotional Expression</strong></li>
  </ol>
  <h3>1. Regulation and Control</h3>
  <p>
    Used to manage the behavior of people or to set rules and policies.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>A teacher saying, "Submit your project on Friday."</li>
      <li>Traffic signs or announcements enforcing rules.</li>
    </ul>
  </p>
  <h3>2. Social Interaction</h3>
  <p>
    Used to build and maintain relationships with others. It helps us connect and socialize.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>Chatting with a friend about your day.</li>
      <li>Greeting someone “Good morning!”</li>
    </ul>
  </p>
  <h3>3. Motivation</h3>
  <p>
    Used to encourage or persuade someone to take action or keep going.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>A coach saying, “You can do it!”</li>
      <li>A parent encouraging their child to study hard.</li>
    </ul>
  </p>
  <h3>4. Information Dissemination</h3>
  <p>
    Used to share data, facts, updates, or knowledge.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>News reports delivering current events.</li>
      <li>A student explaining a research topic to the class.</li>
    </ul>
  </p>
  <h3>5. Emotional Expression</h3>
  <p>
    Used to express feelings, opinions, and emotions openly or subtly.
    <br><br><strong>Examples:</strong>
    <ul>
      <li>Smiling when happy or crying when sad.</li>
      <li>Saying “I’m proud of you.”</li>
    </ul>
  </p>
  <h4>Summary Table:</h4>
  <table border="1" cellpadding="8">
    <tr>
      <th>Function</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Regulation/Control</td>
      <td>To direct or manage behavior</td>
      <td>“Please line up.”</td>
    </tr>
    <tr>
      <td>Social Interaction</td>
      <td>To build relationships</td>
      <td>“Hi, how are you?”</td>
    </tr>
    <tr>
      <td>Motivation</td>
      <td>To inspire or persuade</td>
      <td>“Keep going, you got this!”</td>
    </tr>
    <tr>
      <td>Information</td>
      <td>To inform or educate</td>
      <td>Giving a weather update</td>
    </tr>
    <tr>
      <td>Emotional Expression</td>
      <td>To express feelings</td>
      <td>“I’m really grateful.”</td>
    </tr>
  </table>
  <h4>Conclusion:</h4>
  <p>
    Communication is more than just speaking — it's a tool for regulating behavior, connecting with others, inspiring action, spreading knowledge, and expressing emotions. Knowing how and when to use these functions will help you communicate effectively in all aspects of life.
  </p>
</div>
</div>
    `;
    document.getElementById('bodypage').innerHTML = oralCom;
}

// ADVANCE STUDY
