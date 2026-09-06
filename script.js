// Nav / hero button shortcuts
document.getElementById('getStartedBtn').addEventListener('click', () => {
  document.getElementById('categories').scrollIntoView({behavior:'smooth'});
});
document.getElementById('heroSearchBtn').addEventListener('click', () => {
  document.getElementById('categories').scrollIntoView({behavior:'smooth'});
});
document.getElementById('findWorkerBtn').addEventListener('click', () => {
  document.getElementById('categories').scrollIntoView({behavior:'smooth'});
});
document.getElementById('becomeWorkerBtn').addEventListener('click', () => {
  document.getElementById('worker').scrollIntoView({behavior:'smooth'});
});
document.getElementById('requestServiceBtn').addEventListener('click', () => {
  document.getElementById('job').scrollIntoView({behavior:'smooth'});
});

// Category selection -> pre-fill job form category
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    const cat = card.dataset.cat;
    const sel = document.getElementById('jobCat');
    if ([...sel.options].some(o => o.value === cat)) sel.value = cat;
    document.getElementById('job').scrollIntoView({behavior:'smooth'});
  });
});

// Mock photo upload
let photoCount = 0;
document.getElementById('uploadBox').addEventListener('click', () => {
  if (photoCount >= 4) return;
  photoCount++;
  const t = document.createElement('div');
  t.className = 'thumb';
  t.textContent = '📷';
  document.getElementById('thumbs').appendChild(t);
});

// Time slot selection
document.querySelectorAll('.slot').forEach(s => {
  s.addEventListener('click', () => {
    document.querySelectorAll('.slot').forEach(x => x.classList.remove('selected'));
    s.classList.add('selected');
  });
});

// Submit job -> animate status track (simulates the worker-review flow)
document.getElementById('submitJobBtn').addEventListener('click', () => {
  const track = document.getElementById('statusTrack');
  track.style.display = 'block';
  ['s2','s3','s4'].forEach((id, i) => {
    setTimeout(() => document.getElementById(id).classList.add('done'), (i+1) * 900);
  });
  track.scrollIntoView({behavior:'smooth', block:'nearest'});
});
