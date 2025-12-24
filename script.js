<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Mastery 315 | Theory & Practice</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <style>

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}


main{flex:1}

/* ---------- GLOBAL GLASS ---------- */
.glass{
    background:linear-gradient(145deg,rgba(15,23,42,.85),rgba(15,23,42,.6));
    backdrop-filter:blur(14px);
    border:1px solid rgba(255,255,255,.08);
    box-shadow:0 20px 60px rgba(0,0,0,.4), inset 0 0 0 1px rgba(255,255,255,.02);
}

/* ---------- NAV ---------- */
nav{
    box-shadow:0 10px 40px rgba(0,0,0,.5);
}
.nav-tab{
    transition:all .35s ease;
    border-bottom:3px solid transparent;
    cursor:pointer;
    color:#94a3b8;
}
.nav-tab:hover{
    color:white;
    transform:translateY(-1px);
}
.nav-tab.active{
    color:#818cf8;
    border-bottom-color:#818cf8;
}

.dark-mode {
  background: #0f172a !important;
  color: #fff !important;
}

.dark-mode .glass{
  background: rgba(15,23,42,.9) !important;
}

.dark-mode nav{
  background:#020617 !important;
}


/* ---------- QUIZ UI ---------- */
.option-ui {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    border-radius: 20px;
    padding: 18px 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    overflow: hidden;
}
.option-ui:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

/* Selected / Correct / Wrong States */
.selected-choice {
    background: rgba(99, 102, 241, 0.25) !important;
    border-color: #818cf8 !important;
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.35);
    transform: scale(1.03);
}
.correct-choice {
    background: rgba(16, 185, 129, 0.25) !important;
    border-color: #10b981 !important;
    box-shadow: 0 0 35px rgba(16, 185, 129, 0.45);
    transform: scale(1.03);
}
.wrong-choice {
    background: rgba(239, 68, 68, 0.25) !important;
    border-color: #ef4444 !important;
    box-shadow: 0 0 35px rgba(239, 68, 68, 0.45);
    transform: scale(1.03);
}

/* Number Circle */
.circle-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #475569;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 900;
    transition: all 0.25s ease;
}
.selected-choice .circle-icon {
    background: #818cf8;
    border-color: #818cf8;
    color: white;
}

/* ---------- POP ANIMATION ---------- */
@keyframes pop {
    0% {
        transform: scale(0.95);
        opacity: 0;
    }
    50% {
        transform: scale(1.02);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
.animate-pop {
    animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* ---------- OPTION HOVER GLOW ---------- */
.option-ui::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(129, 140, 248, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
}
.option-ui:hover::before {
    opacity: 1;
}

/* ---------- RESPONSIVE TEXT ---------- */
.option-ui span, .option-ui p {
    transition: color 0.25s;
    font-weight: 600;
}


/* ---------- THEORY CARDS ENHANCED ---------- */
.theory-card{
    transition:.3s;
    border-left:6px solid #6366f1;   /* default color */
    border-radius:22px;
    background: rgba(30,41,59,0.85); /* slightly transparent dark background */
    padding: 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    color: #e0e7ff; /* lighter text for readability */
}

.theory-card:hover{
    transform:translateY(-5px) scale(1.02);
    background: rgba(50,60,90,0.95);
    border-color:#818cf8;
    box-shadow: 0 15px 40px rgba(0,0,0,0.5);
}

/* Optional colored tag (top-left small circle) */
.theory-card .tag-dot{
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #6366f1;
}

/* Title and body text styling */
.theory-card h2{
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #f0f5ff;
}
.theory-card p{
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #cbd5e1;
}


/* ---------- CONSOLE ---------- */
#console-output{
    font-family:'Courier New',monospace;
    font-size:.9rem;
    color:#10b981;
    white-space:pre-wrap;
}
.snippet-scroll::-webkit-scrollbar{width:6px}
.snippet-scroll::-webkit-scrollbar-thumb{
    background:rgba(255,255,255,.12);
    border-radius:10px
}

/* ---------- PROGRESS BAR ---------- */
#q-progress{
    background:linear-gradient(90deg,#818cf8,#4f46e5,#818cf8);
}

/* ---------- BADGE ---------- */
.streak-badge{
    background:linear-gradient(to right,#f59e0b,#ef4444);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

/* Modal overlay hidden by default */
#explanation-modal {
    display: none;           /* hidden initially */
    position: fixed;
    inset: 0;
    z-index: 50;
    background: rgba(0,0,0,0.5); /* semi-transparent black */
    backdrop-filter: blur(5px);   /* blur background */
    align-items: center;          /* center vertically */
    justify-content: center;      /* center horizontally */
}

/* Modal card content */
#explanation-modal > div {
    max-width: 500px;
    width: 90%;
    padding: 2rem;
    background-color: #1e293b;
    border-radius: 2rem;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    transform: scale(0.95);
    opacity: 0;
    transition: all 0.3s ease;
}

/* When modal is visible */
#explanation-modal.show {
    display: flex;   /* flex only when .show is added */
}

#explanation-modal.show > div {
    transform: scale(1);
    opacity: 1;
}

/* Close button */
#explanation-modal button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #f8fafc;
    font-size: 1.5rem;
    cursor: pointer;
}



</style>
<body class="antialiased bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">



    <!-- TOP NAVIGATION -->
    <!-- TOP NAVIGATION -->
  <nav id="navbar" class="sticky top-0 z-50 glass border-b border-white/5 px-6 bg-gray-900/50 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-500 ">

    <div class="max-w-7xl mx-auto flex justify-between items-center h-20">

      <!-- Logo & Title -->
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-extrabold text-white shadow-lg">JS</div>
        <span class="font-bold text-xl tracking-tight hidden sm:block">Mastery <span class="text-indigo-500">315</span></span>
      </div>

      <!-- Tabs & Dark/Light Toggle -->
      <div class="flex items-center space-x-4 sm:space-x-8 h-full">
        <button id="tab-theory" onclick="showView('theory')" class="nav-tab active font-bold text-[10px] sm:text-xs uppercase tracking-widest px-2 h-full flex items-center hover:text-indigo-500 transition-colors duration-300">Library</button>
        <button id="tab-lab" onclick="showView('lab')" class="nav-tab font-bold text-[10px] sm:text-xs uppercase tracking-widest px-2 h-full flex items-center hover:text-indigo-500 transition-colors duration-300">Lab</button>
        <button id="tab-quiz" onclick="showView('quiz')" class="nav-tab font-bold text-[10px] sm:text-xs uppercase tracking-widest px-2 h-full flex items-center hover:text-indigo-500 transition-colors duration-300">Quiz</button>
        <button id="tab-about" onclick="showView('about')" class="nav-tab font-bold text-[10px] sm:text-xs uppercase tracking-widest px-2 h-full flex items-center hover:text-indigo-500 transition-colors duration-300">Resources</button>

        <!-- Dark/Light Toggle -->
        <button id="darkToggle" class="ml-4 p-2 rounded-full bg-gray-800 text-gray-100 shadow hover:bg-gray-700 transition-colors duration-300">
          ☀️
        </button>
      </div>
    </div>
  </nav>

    <main class="max-w-7xl mx-auto py-10 px-4 ">

<!-- THEORY SECTION -->
<div id="view-theory" class="space-y-12 animate-pop px-4 md:px-12 lg:px-24">

    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-10">
        <span class="bg-gradient-to-r from-indigo-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
            Source: Mr. Belete Materials
        </span>
        <h1 class="text-4xl sm:text-5xl font-black mb-4 tracking-tight mt-6">
            Theory <span class="text-emerald-400">Vault</span>
        </h1>
        <p class="text-slate-300 text-lg">Comprehensive summary of core JavaScript concepts.</p>

        <!-- Search Box -->
        <div class="mt-8 relative max-w-md mx-auto">
            <input type="text" id="theory-search" oninput="filterTheory()" placeholder="Search concepts..." 
                class="w-full  border-indigo-500/30 rounded-2xl py-4 px-6 placeholder-indigo-300 text-blue focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-1 transition-all shadow-lg">
        </div>
    </div>

    <!-- Theory Cards Grid -->
    <div id="theory-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
</div>



     <!-- CODE LAB WITH LINE NUMBERS -->
<div id="view-lab" class="hidden space-y-12 animate-pop">
    <div class="text-center max-w-3xl mx-auto mb-10">
        <h1 class="text-4xl sm:text-5xl font-black mb-4 tracking-tight">Code <span class="text-emerald-500">Lab</span></h1>
        <p class="text-slate-400">Execute over 70 script variants from the curriculum.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

        <!-- SNIPPETS PANEL -->
        <div class="lg:col-span-3 glass p-6 rounded-[2rem] flex flex-col h-[480px] lg:h-[550px]">
            <h3 class="text-lg font-bold mb-4 flex items-center space-x-2">
                <span>📁</span> <span>Snippets</span>
            </h3>
            <div id="lab-snippets" class="flex-1 overflow-y-auto pr-2 space-y-2 snippet-scroll">
                <div class="option-ui p-3 cursor-pointer hover:shadow-lg hover:bg-indigo-700/10 transition-all rounded-xl">
                    console.log("Hello World!");
                </div>
            </div>
        </div>

        <!-- CODE EDITOR & CONSOLE -->
        <div class="lg:col-span-6 flex flex-col space-y-4">

            <!-- Editor with line numbers -->
            <div class="relative bg-slate-950 rounded-[2rem] border border-white/10 shadow-inner flex-1 overflow-hidden">
                <div class="absolute top-4 right-6 flex items-center space-x-4 z-10">
                    <button onclick="copyCurrentCode()" class="text-[10px] font-black uppercase text-indigo-400 hover:text-white transition-all">Copy</button>
                    <div class="text-[10px] font-black uppercase text-white/20 tracking-tighter">Editor</div>
                </div>

                <div class="flex h-full">
                    <!-- Line numbers -->
                    <pre id="line-numbers" class="bg-slate-900 text-slate-500 p-4 text-right select-none leading-relaxed font-mono">1
2
3
4
5
6
7
8
9
10</pre>

                    <!-- Code area -->
                    <textarea id="code-input" class="w-full h-72 md:h-80 bg-transparent text-indigo-300 font-mono focus:outline-none resize-none leading-relaxed p-4" spellcheck="false" placeholder="// Select a snippet or write code..."></textarea>
                </div>
            </div>

            <!-- Buttons -->
            <div class="grid grid-cols-2 gap-4">
                <button onclick="runCode()" class="bg-emerald-600 hover:bg-emerald-500 py-3 md:py-4 rounded-2xl font-black text-white shadow-lg hover:scale-105 transition-transform active:scale-95 uppercase tracking-widest">Run Script</button>
                <button onclick="clearConsole()" class="bg-slate-800 hover:bg-slate-700 py-3 md:py-4 rounded-2xl font-black text-slate-400 shadow hover:scale-105 transition-transform active:scale-95 uppercase tracking-widest">Clear</button>
            </div>

            <!-- Console -->
            <div class="bg-black rounded-2xl p-4 md:p-6 border border-emerald-500/30 min-h-[130px] shadow-inner">
                <p class="text-[10px] uppercase font-black text-emerald-500 mb-2 tracking-widest flex items-center space-x-2">
                    <span>●</span> <span>Console Output</span>
                </p>
                <div id="console-output" class="font-mono text-sm">Ready to execute...</div>
            </div>
        </div>

        <!-- RECENT RUNS -->
        <div class="lg:col-span-3 glass p-6 rounded-[2rem] flex flex-col h-[480px] lg:h-[550px]">
            <h3 class="text-lg font-bold mb-4 flex items-center space-x-2">
                <span>🕒</span> <span>Recent Runs</span>
            </h3>
            <div id="run-history" class="flex-1 overflow-y-auto space-y-3 snippet-scroll">
                <p class="text-[10px] text-slate-500 italic">No history yet.</p>
            </div>
        </div>

    </div>
</div>

<!-- QUIZ HOME -->
<div id="view-quiz-home" class="hidden space-y-14 animate-pop">

    <!-- TITLE -->
    <div class="text-center space-y-3">
        <h2 class="text-4xl sm:text-6xl font-black tracking-tight animate-fade-in">
            Quiz <span class="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent animate-gradient-text">Marathon</span>
        </h2>
        <p class="text-slate-400 text-sm sm:text-base animate-fade-in delay-100">
            Chapter 6 Assessment • <span class="text-indigo-400 font-bold">315 Questions</span>
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <!-- SECTION JUMP -->
        <div class="relative rounded-[2.2rem] overflow-hidden animate-slide-left">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/10 blur-xl animate-pulse-slow"></div>

            <div class="glass relative p-10 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.1)] space-y-6 transition-transform hover:scale-105 hover:shadow-[0_0_70px_rgba(99,102,241,0.2)]">
                
                <div class="flex items-center space-x-4">
                    <div class="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-400/40 flex items-center justify-center text-3xl animate-bounce-slow">
                        🎯
                    </div>
                    <h3 class="text-3xl font-black">Jump to Section</h3>
                </div>

                <p class="text-slate-400 text-sm">
                    Select a module and continue where you left off.
                </p>

                <!-- Section Buttons -->
                <div id="module-path" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <!-- Buttons generated dynamically by JS -->
                </div>
            </div>
        </div>

        <!-- GRAND MARATHON -->
        <div class="relative rounded-[2.2rem] overflow-hidden animate-slide-right">
            <div class="absolute inset-0 bg-gradient-to-tr from-indigo-700/30 via-purple-700/20 to-indigo-400/10 blur-2xl animate-pulse-slow"></div>

            <div class="glass relative p-12 rounded-[2rem] text-center border border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.2)] overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_80px_rgba(99,102,241,0.4)]">

                <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full border-4 border-indigo-500/40 blur-xl opacity-60 animate-spin-slow"></div>

                <div class="text-8xl mb-6 transform group-hover:scale-110 transition-all duration-300 drop-shadow animate-bounce-slow">
                    🏆
                </div>

                <h3 class="text-3xl font-black mb-2 tracking-tight animate-fade-in">
                    Grand Marathon
                </h3>

                <p class="text-slate-400 text-sm max-w-xs mx-auto mb-10 animate-fade-in delay-100">
                    Answer all 315 questions in one challenge mode. Test your true mastery!
                </p>

                <button onclick="startQuiz(0)"
                    class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-5 rounded-2xl font-black text-lg
                    hover:from-indigo-500 hover:to-purple-500 transition-all shadow-[0_10px_40px_rgba(99,102,241,0.5)]
                    hover:shadow-[0_10px_60px_rgba(99,102,241,0.7)] active:scale-95 animate-pulse-slow">
                    START FROM Q1 🚀
                </button>

            </div>
        </div>

    </div>
</div>

<!-- QUIZ PLAY SECTION -->
<div id="view-quiz-play" class="hidden max-w-4xl mx-auto space-y-6 animate-pop">

  <!-- TOP BAR -->
  <div class="flex flex-col sm:flex-row justify-between items-center px-4 space-y-3 sm:space-y-0">

    <!-- Question Number & Stats -->
    <div class="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
      <!-- Only display "Q1" or similar if needed; optional -->
      <span id="q-num-display" class="font-extrabold text-indigo-500 text-3xl sm:text-4xl tracking-tight uppercase">Q1</span>

      <!-- Live Stats -->
      <div id="live-stats" class="hidden sm:flex items-center space-x-6">
        <div class="flex flex-col items-center mr-4">
          <p id="stat-streak" class="font-black text-lg streak-badge">0</p>
          <span class="text-[8px] text-amber-500 font-black uppercase tracking-tighter">🔥 Streak</span>
        </div>
        <div class="text-center">
          <p id="stat-correct" class="font-bold text-lg text-emerald-400">0</p>
          <span class="text-[8px] text-emerald-500 font-black uppercase">Correct</span>
        </div>
        <div class="text-center">
          <p id="stat-wrong" class="font-bold text-lg text-red-400">0</p>
          <span class="text-[8px] text-red-500 font-black uppercase">Wrong</span>
        </div>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="w-full sm:w-64 bg-slate-800 h-3 rounded-full overflow-hidden mt-2 sm:mt-0 shadow-inner">
      <div id="q-progress" class="bg-indigo-500 h-full w-0 transition-all duration-500"></div>
    </div>
  </div>

  <!-- QUESTION BOX -->
  <div id="question-box" class="space-y-6 p-6 glass rounded-2xl border border-indigo-500/20 shadow-lg min-h-[220px]">
    <!-- Only the question text itself -->
    <h3 id="current-q-text" class="text-2xl sm:text-3xl font-extrabold leading-relaxed text-white">
      Foundations: How to declare variables?
    </h3>

    <!-- OPTIONS -->
    <div id="options-container" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- Options buttons dynamically filled by JS -->
    </div>
  </div>

  <!-- NAVIGATION BUTTONS -->
  <div class="flex justify-between space-x-4">
    <button id="btn-prev" onclick="handlePrevQ()" class="flex-1 bg-slate-700 hover:bg-slate-600 py-3 sm:py-4 rounded-2xl font-black text-white shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed">
      ← Previous
    </button>

    <button id="btn-check" onclick="processAnswer()" class="flex-1 bg-indigo-600 hover:bg-indigo-500 py-3 sm:py-4 rounded-2xl font-black text-white shadow-md transition-all">
      Confirm Choice
    </button>

    <button id="btn-next" onclick="handleNextQ()" class="flex-1 bg-white text-slate-900 font-black py-3 sm:py-4 rounded-2xl hover:bg-indigo-50 transition-all shadow-md">
      Next →
    </button>
  </div>
</div>

<!-- EXPLANATION MODAL -->
<div id="explanation-modal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50">
  <div class="bg-slate-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
    <button onclick="closeExplanation()" class="absolute top-4 right-4 text-white font-bold text-xl">✖</button>
    <div class="flex items-start space-x-4 sm:space-x-6">
      <div id="expl-icon-popup" class="text-3xl sm:text-4xl">💡</div>
      <div class="space-y-2">
        <h4 id="expl-title-popup" class="font-extrabold text-lg sm:text-xl text-white">Explanation</h4>
        <p id="expl-body-popup" class="text-slate-400 leading-relaxed text-sm sm:text-base"></p>
      </div>
    </div>
  </div>
</div>



   <!-- ABOUT / RESOURCES -->
<div id="view-about" class="hidden space-y-12 animate-pop">

  <!-- DOWNLOAD PART 1 -->
  <div class="glass p-8 rounded-[2rem] border border-indigo-500/20 space-y-4">
    <h2 class="text-2xl font-black text-indigo-500">Uni6 Part 1</h2>
    <p class="text-slate-400 text-sm leading-relaxed">
      This part contains core fundamentals, exercises, and theory resources for Uni6 Part 1.
    </p>
    <a href="./Uni6_Part1.zip" download
       class="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-colors">
       Download Part 1 📥
    </a>
  </div>

  <!-- DOWNLOAD PART 2 -->
  <div class="glass p-8 rounded-[2rem] border border-indigo-500/20 space-y-4">
    <h2 class="text-2xl font-black text-indigo-500">Uni6 Part 2</h2>
    <p class="text-slate-400 text-sm leading-relaxed">
      This part continues with advanced exercises and additional resources for Uni6 Part 2.
    </p>
    <a href="./Uni6_Part2.zip" download
       class="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transition-colors">
       Download Part 2 📥
    </a>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

    <!-- INSTRUCTOR CARD -->
<div class="glass p-10 rounded-[2.5rem] border-indigo-500/10 space-y-6 flex flex-col justify-between">
    <div>
        <h2 class="text-2xl font-black mb-4">Instructor <span class="text-indigo-500">Mr. Belete</span></h2>
        <p class="text-slate-400 text-sm leading-relaxed mb-8">
            JavaScript instructor who developed the curriculum with focus on practical exercises and deep understanding. Communicate directly via Telegram for guidance.
        </p>
        <div class="bg-indigo-600/10 p-6 rounded-3xl border border-indigo-500/10 space-y-4">
            <p class="font-black text-lg mb-2">Contact & Resources</p>

            <!-- Inline Contact Info -->
            <div class="flex flex-wrap gap-8 p-3 text-slate-300 font-semibold">
                <div class="flex items-center space-x-2">
                    <span>📧</span>
                    <span>belete@example.com</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span>📞</span>
                    <span>+251 9XX XXX XXX</span>
                </div>
               
            </div>

            <button class="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-bold text-sm transition-all">
                <a href="https://t.me/BeleteJS" target="_blank">Join Telegram Channel</a>
                
            </button>
            
        </div>
    </div>
</div>


    <!-- DEVELOPER CARD -->
<div class="glass p-8 md:p-10 rounded-[2.5rem] border-indigo-500/20 space-y-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
    <!-- Header -->
    <div class="flex items-center space-x-6">
        <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-4xl shadow-lg animate-bounce">
            👨‍💻
        </div>
        <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-white">Gemachis T.</h2>
            <p class="text-indigo-400 font-semibold text-sm md:text-base">Software Developer & Student</p>
        </div>
    </div>

    <!-- Description -->
    <p class="text-slate-400 text-sm md:text-base leading-relaxed">
        Creator of JS Mastery 315 platform. Passionate about building interactive learning tools, web apps, and UI/UX experiences. Connect to collaborate or explore my work.
    </p>

    <!-- Contact & Links -->
    <div class="grid grid-cols-1 gap-3 text-sm text-slate-300 font-semibold">
        <div class="flex items-center space-x-3 hover:text-white transition-colors">
            <span class="text-indigo-400">📧</span>
            <span>gemachis.dev@gmail.com</span>
        </div>
        <div class="flex items-center space-x-3 hover:text-white transition-colors">
            <span class="text-indigo-400">📞</span>
            <span>+251 9XX XXX XXX</span>
        </div>
        <div class="flex items-center space-x-3 hover:text-white transition-colors">
            <span class="text-indigo-400">📍</span>
            <span>Addis Ababa, Ethiopia</span>
        </div>
        <div class="flex items-center space-x-3 hover:text-white transition-colors">
            <span class="text-indigo-400">💬</span>
            <a href="https://t.me/username" target="_blank" class="underline">Telegram</a>
        </div>
        <div class="flex items-center space-x-3 hover:text-white transition-colors">
            <span class="text-indigo-400">🔗</span>
            <a href="https://www.linkedin.com/in/username" target="_blank" class="underline">LinkedIn</a>
        </div>
        <div class="flex items-center space-x-3 hover:text-white transition-colors">
            <span class="text-indigo-400">🔗</span>
            <a href="https://github.com/username" target="_blank" class="underline">GitHub</a>
        </div>
        <div class="flex items-center space-x-3 hover:text-white transition-colors">
            <span class="text-indigo-400">🌐</span>
            <a href="https://portfolio.example.com" target="_blank" class="underline">Portfolio</a>
        </div>
    </div>

    <!-- Badges -->
    <div class="flex flex-wrap gap-2 mt-4">
        <span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">JavaScript</span>
        <span class="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">React</span>
        <span class="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Python</span>
        <span class="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">TailwindCSS</span>
    </div>
</div>




    </main>

    <script>


// ============================================
// THEME TOGGLE
// ============================================

const darkToggle = document.getElementById("darkToggle")

darkToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark")

  if (document.documentElement.classList.contains("dark")) {
    darkToggle.textContent = "🌙"
    localStorage.setItem("theme", "dark")
  } else {
    darkToggle.textContent = "☀️"
    localStorage.setItem("theme", "light")
  }
})

// Apply saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "light"
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark")
    darkToggle.textContent = "🌙"
  }
})



  

        // --- DATA ---
        const theoryData = [
            { title: "JS History", body: "Created in 1995 for Netscape. Now the standard for web logic." },
            { title: "V8 Engine", body: "Google engine that compiles JS directly to machine code for speed." },
            { title: "Hoisting", body: "Variable and function declarations are moved to the top of their scope." },
            { title: "Closures", body: "Functions retaining access to variables from their parent scope after execution." },
            { title: "Prototypes", body: "The mechanism for inheritance in JS via a chain of linked objects." },
            { title: "Strict Mode", body: "A restricted variant of JS that throws errors for silent failures." },
            { title: "Arrow Funcs", body: "Concise syntax for functions that lexically binds the 'this' value." },
            { title: "Destructuring", body: "Unpacking values from arrays or properties from objects into variables." },
            { title: "Promises", body: "An object representing the eventual completion or failure of an async task." },
            { title: "Async/Await", body: "Syntactic sugar over Promises making async code look synchronous." },
            { title: "DOM Tree", body: "The Document Object Model: a tree representation of the HTML document." },
            { title: "Type Coercion", body: "Automatic conversion of values from one data type to another (e.g., 5 + '5')." },
            { title: "Event Loop", body: "Enables non-blocking I/O by offloading tasks and checking the queue." },
            { title: "LocalStorage", body: "Browser-based key-value storage that persists after page reloads." },
            { title: "IIFE", body: "Immediately Invoked Function Expressions used for private scoping." },
            { title: "Call Stack", body: "LIFO structure used to keep track of active function calls." },
            { title: "Event Delegation", body: "A technique of handling events at a higher level in the DOM." },
            { title: "Currying", body: "Transforming a function with multiple arguments into a sequence of functions." },
            { title: "Memoization", body: "Optimization technique to cache function results for faster future access." },
            { title: "Spread Operator", body: "Syntax (...) to expand iterable objects into individual elements." } ,

        ];


const colors = [
    "#6366f1", "#10b981", "#f59e0b", "#f43f5e",
    "#8b5cf6", "#22d3ee", "#facc15", "#ec4899"
];

const grid = document.getElementById('theory-grid');

theoryData.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('theory-card', 'relative', 'p-6');

    // FORCE color
    card.style.borderLeft = `6px solid ${colors[index % colors.length]}`;

    card.innerHTML = `
        <h2 class="font-bold text-lg mb-2">${item.title}</h2>
        <p class="text-slate-400 text-sm">${item.body}</p>
    `;

    grid.appendChild(card);
});
        



        const labSnippets = [
  // Variables & Data Types
  { name: "Ex 1: Declare Variables", code: "let a = 10;\nconst b = 20;\nvar c = 30;\nconsole.log(a, b, c);" },
  { name: "Ex 2: Template Literals", code: "const name = 'Gemachis';\nconsole.log(`Hello ${name}`);" },
  { name: "Ex 3: Type Conversion", code: "const num = '5';\nconsole.log(Number(num) + 2);" },
  { name: "Ex 4: typeof Operator", code: "let x = true;\nconsole.log(typeof x);" },
  { name: "Ex 5: Null vs Undefined", code: "let a = null;\nlet b;\nconsole.log(a, b);" },

  // Operators
  { name: "Ex 6: Arithmetic Operators", code: "console.log(5 + 3, 5 - 3, 5 * 3, 5 / 3, 5 % 3);" },
  { name: "Ex 7: Comparison Operators", code: "console.log(5 > 3, 5 < 3, 5 == '5', 5 === '5');" },
  { name: "Ex 8: Logical Operators", code: "console.log(true && false, true || false, !true);" },
  { name: "Ex 9: Assignment Operators", code: "let a = 5;\na += 3;\na *= 2;\nconsole.log(a);" },
  { name: "Ex 10: Ternary Operator", code: "let age = 18;\nconsole.log(age >= 18 ? 'Adult' : 'Minor');" },

  // Functions
  { name: "Ex 11: Function Declaration", code: "function greet(name){ console.log('Hello', name); }\ngreet('Gemachis');" },
  { name: "Ex 12: Function Expression", code: "const greet = function(name){ console.log('Hi', name); };\ngreet('JS');" },
  { name: "Ex 13: Arrow Function", code: "const add = (a, b) => a + b;\nconsole.log(add(5,3));" },
  { name: "Ex 14: Default Parameters", code: "function greet(name='Guest'){ console.log('Hello', name); }\ngreet();" },
  { name: "Ex 15: Rest Parameters", code: "function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }\nconsole.log(sum(1,2,3,4));" },

 
{ num: 311, txt: "Engine: How to optimize loops?", opts: ["Use for-of instead of forEach","Cache length in for loop","Both","None"], ans: "Both", expl: "Caching length and using modern loops improves performance." },
{ num: 312, txt: "Engine: How to avoid memory leaks?", opts: ["Remove unused listeners","Nullify unused references","Both","Cannot avoid"], ans: "Both", expl: "Removing references and listeners prevents memory leaks." },
{ num: 313, txt: "Engine: How to profile code?", opts: ["Browser DevTools Profiler","console.time()/console.timeEnd()","Both","None"], ans: "Both", expl: "Profiler or console timers help identify performance bottlenecks." },
{ num: 314, txt: "Engine: How to optimize recursion?", opts: ["Tail recursion","Memoization","Both","Cannot optimize"], ans: "Both", expl: "Tail recursion and memoization reduce stack usage and repeated computation." },
{ num: 315, txt: "Engine: How to reduce GC pressure?", opts: ["Reuse objects","Avoid unnecessary allocations","Both","Cannot reduce"], ans: "Both", expl: "Reusing objects and minimizing allocations reduces garbage collection overhead." }

];

        // LOGIC TO FILL ARRAY IF DATA IS MISSING (FOR 315 COUNT)
        const baseCount = qBank.length;
        if (baseCount < 315) {
            for (let i = baseCount + 1; i <= 315; i++) {
                const template = qBank[(i-1) % baseCount];
                qBank.push({ 
                    ...template, 
                    num: i, 
                    txt: `[Q${i}] - ${template.txt}`,
                    expl: `(Reference Q${template.num}) ${template.expl}`
                });
            }
        }

        function handlePrevQ() {
    if (activeQuizIdx > 0) {
        activeQuizIdx--;
        quizState = "playing";
        renderQuestion();
    }
}


        // --- STATE ---
        let stats = { correct: 0, wrong: 0, streak: 0 };
        let activeQuizIdx = 0;
        let selectedOpt = null;
        let quizState = "idle"; 
        let currentActiveView = 'theory';

        // --- CORE UI ---
        function showView(view) {
            currentActiveView = view;
            document.querySelectorAll('main > div').forEach(d => d.classList.add('hidden'));
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            
            const viewEl = document.getElementById(`view-${view}`) || document.getElementById(`view-${view}-home`);
            if (viewEl) viewEl.classList.remove('hidden');
            
            if (view === 'quiz') initQuizHome();
            if (view === 'lab') initLab();
            
            document.getElementById(`tab-${view}`).classList.add('active');
        }

        // --- THEORY ---
        function filterTheory() {
            const query = document.getElementById('theory-search').value.toLowerCase();
            const grid = document.getElementById('theory-grid');
            grid.innerHTML = '';
            theoryData.filter(t => t.title.toLowerCase().includes(query) || t.body.toLowerCase().includes(query))
                .forEach(t => {
                    const el = document.createElement('div');
                    el.className = 'theory-card glass p-6 rounded-2xl';
                    el.innerHTML = `<h4 class="font-bold text-lg mb-2 text-indigo-400">${t.title}</h4><p class="text-sm text-slate-400">${t.body}</p>`;
                    grid.appendChild(el);
                });
        }

        // --- LAB ---
        function initLab() {
            const list = document.getElementById('lab-snippets');
            list.innerHTML = '';
            labSnippets.forEach((s, i) => {
                const btn = document.createElement('button');
                btn.className = "w-full text-left p-3 rounded-xl hover:bg-white/5 transition-colors text-xs font-semibold text-slate-400 truncate";
                btn.innerText = s.name;
                btn.onclick = () => { document.getElementById('code-input').value = s.code; };
                list.appendChild(btn);
            });
        }

        function runCode() {
            const code = document.getElementById('code-input').value;
            const output = document.getElementById('console-output');
            output.innerText = '';
            
            const originalLog = console.log;
            console.log = (...args) => {
                output.innerText += args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ') + '\n';
            };

            try {
                eval(code);
                const hist = document.getElementById('run-history');
                const p = document.createElement('p');
                p.className = "text-[10px] bg-white/5 p-2 rounded-lg border border-white/5 text-emerald-400";
                p.innerText = `Ran at ${new Date().toLocaleTimeString()}`;
                if(hist.children[0]?.tagName === 'P' && hist.children[0].innerText.includes('No history')) hist.innerHTML = '';
                hist.prepend(p);
            } catch (err) {
                output.innerText = `Error: ${err.message}`;
            } finally {
                console.log = originalLog;
            }
        }

        function clearConsole() { document.getElementById('console-output').innerText = 'Ready to execute...'; }
        function copyCurrentCode() {
            const area = document.getElementById('code-input');
            area.select();
            document.execCommand('copy');
        }

   // --- QUIZ ---
function initQuizHome() {
    const path = document.getElementById('module-path');
    path.innerHTML = '';

    // Define your sections with titles and starting index
    const segments = [
        { title: "Variables & Data Types", start: 0 },
        { title: "Functions & Scope", start: 50 },
        { title: "DOM Manipulation", start: 100 },
        { title: "Events & Listeners", start: 150 },
        { title: "Arrays & Loops", start: 200 },
        { title: "Objects & Classes", start: 250 }
    ];

    segments.forEach((s, index) => {
        const btn = document.createElement('button');
        btn.className = `
            w-full 
            bg-indigo-700/20 
            border border-indigo-400/30 
            p-4 
            rounded-xl 
            text-center 
            font-bold 
            text-white 
            text-sm 
            uppercase 
            tracking-wider 
            hover:bg-indigo-600/30 
            hover:scale-105 
            transition-all
        `;
        btn.innerText = `${index + 1}️⃣ ${s.title}`;
        btn.onclick = () => startQuiz(s.start);
        path.appendChild(btn);
    });
}


        function startQuiz(idx) {
            activeQuizIdx = idx;
            quizState = "playing";
            document.getElementById('view-quiz-home').classList.add('hidden');
            document.getElementById('view-quiz-play').classList.remove('hidden');
            renderQuestion();
        }

        function renderQuestion() {
            const q = qBank[activeQuizIdx];
            selectedOpt = null;
            document.getElementById('q-num-display').innerText = `Q${q.num}`;
            document.getElementById('current-q-text').innerText = q.txt;
            document.getElementById('btn-check').classList.remove('hidden');
            
            const progress = (q.num / 315) * 100;
            document.getElementById('q-progress').style.width = `${progress}%`;

            const container = document.getElementById('options-container');
            container.innerHTML = '';
            q.opts.forEach((opt, i) => {
                const div = document.createElement('div');
                div.className = "option-ui glass p-5 rounded-2xl flex items-center space-x-4";
                div.id = `opt-${i}`;
                div.onclick = () => selectOpt(i);
                div.innerHTML = `<div class="circle-icon">${i+1}</div><span>${opt}</span>`;
                container.appendChild(div);
            });
        }

        function selectOpt(idx) {
            if (quizState !== "playing") return;
            selectedOpt = idx;
            document.querySelectorAll('.option-ui').forEach(el => el.classList.remove('selected-choice'));
            const target = document.getElementById(`opt-${idx}`);
            if(target) target.classList.add('selected-choice');
        }

     function processAnswer() {
    if (selectedOpt === null || quizState !== "playing") return;

    const q = qBank[activeQuizIdx];
    const isCorrect = q.opts[selectedOpt] === q.ans;

    quizState = "showing-explanation";
    document.getElementById('btn-check').classList.add('hidden');

    const icon = document.getElementById('expl-icon-popup');
    const title = document.getElementById('expl-title-popup');
    const body = document.getElementById('expl-body-popup');

    const optEl = document.getElementById(`opt-${selectedOpt}`);
    if (isCorrect) {
        stats.correct++;
        stats.streak++;
        optEl.classList.add('correct-choice');
        title.innerText = "Correct!";
        icon.innerText = "✅";
    } else {
        stats.wrong++;
        stats.streak = 0;
        optEl.classList.add('wrong-choice');
        title.innerText = "Incorrect";
        icon.innerText = "❌";
        const correctIdx = q.opts.indexOf(q.ans);
        document.getElementById(`opt-${correctIdx}`).classList.add('correct-choice');
    }

    body.innerText = q.expl;
    updateStats();

    // Show modal centered
    const modal = document.getElementById('explanation-modal');
    modal.style.display = 'flex';
    modal.classList.add('show');
}


function closeExplanation() {
    const modal = document.getElementById('explanation-modal');
    modal.classList.remove('show'); // play closing animation
    setTimeout(() => {
        modal.style.display = 'none'; // hide after animation
    }, 300); // match your CSS transition duration

    
}



        function handleNextQ() {
            activeQuizIdx++;
            if (activeQuizIdx >= qBank.length) {
                showView('quiz');
                return;
            }
            quizState = "playing";
            renderQuestion();
        }

        function updateStats() {
            document.getElementById('stat-correct').innerText = stats.correct;
            document.getElementById('stat-wrong').innerText = stats.wrong;
            document.getElementById('stat-streak').innerText = stats.streak;
        }

        // Keyboard Handlers
        window.addEventListener('keydown', (e) => {
            if (currentActiveView !== 'quiz') return;
            
            if (quizState === "playing") {
                if (['1', '2', '3', '4'].includes(e.key)) {
                    selectOpt(parseInt(e.key) - 1);
                }
                if (e.key === 'Enter') processAnswer();
            } else if (quizState === "showing-explanation" && e.key === 'Enter') {
                handleNextQ();
            }
        });

        window.onload = () => {
            filterTheory();
            initLab();
            updateStats();
        };
    </script>
</body>
</html>