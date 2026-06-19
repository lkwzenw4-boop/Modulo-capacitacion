import codecs

with codecs.open('app.js', 'r', 'utf-8') as f:
    content = f.read()

target1 = """function showStudentDetailsModal(trainee) {
    document.getElementById('admin-student-details-modal').classList.add('active');
    document.getElementById('details-modal-title').innerText = `Detalles de ${trainee.name}`;
    
    document.getElementById('detail-exam-attempts').innerText = trainee.examAttempts || 0;
    document.getElementById('detail-exam-time').innerText = trainee.examTimeSeconds || 0;"""

replacement1 = """function showStudentDetailsModal(trainee) {
    document.getElementById('admin-student-details-modal').classList.add('active');
    document.getElementById('details-modal-title').innerText = `Detalles de ${trainee.name}`;
    
    const formatTime = (secs) => {
        if (secs < 60) return `${secs}s`;
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        if (s === 0) return `${m} min`;
        return `${m}:${s.toString().padStart(2, '0')} min`;
    };

    document.getElementById('detail-exam-attempts').innerText = trainee.examAttempts || 0;
    document.getElementById('detail-exam-time').innerText = formatTime(trainee.examTimeSeconds || 0);"""

target2 = """    Object.keys(groupTimes).forEach((groupName) => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.innerText = groupName;
        const tdTime = document.createElement('td');
        tdTime.innerText = `${groupTimes[groupName]}s`;"""

replacement2 = """    Object.keys(groupTimes).forEach((groupName) => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.innerText = groupName;
        const tdTime = document.createElement('td');
        tdTime.innerText = formatTime(groupTimes[groupName]);"""

content = content.replace(target1, replacement1)
content = content.replace(target2, replacement2)

with codecs.open('app.js', 'w', 'utf-8') as f:
    f.write(content)

print("Time format updated successfully")
