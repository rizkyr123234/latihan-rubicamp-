ALTER TABLE mahasiswa add usia int 
UPDATE mahasiswa SET usia = 25 WHERE nama = "Wildan";
UPDATE mahasiswa SET usia = 20 WHERE nama = "Syahid";
UPDATE mahasiswa SET usia = 30 WHERE nama = "Boby";
INSERT INTO mahasiswa(NIM,nama,email,madzhab,usia) values ("M004", "Abdullah", "abdullah@gmail.com", "dzohiri", 19);
INSERT INTO mahasiswa(NIM,nama,email,madzhab,usia) values ("M005", "Hanif", "hanif@gmail.com", "syafii", 18);
INSERT INTO mahasiswa(NIM,nama,email,madzhab,usia) values ("M006", "zaid", "hanif@gmail.com", "syafii", 17);
UPDATE mahasiswa SET ID_jurusan = "Syariah01" WHERE nama = "zaid";
UPDATE mahasiswa SET ID_jurusan = "Hadist02" WHERE nama = "Hanif";
UPDATE mahasiswa SET ID_jurusan = "Syariah01" WHERE nama = "Abdullah";

//soal 2 tampilkan mahasiswa umuur dibawah 20 

SELECT nama from mahasiswa WHERE usia  <20;

// soal 1 tampilkan nama mahasisiwa beserta jurusannya 
select nama, nama_jurusan from mahasiswa left join jurusan USING(ID_jurusan);

insert into kontrak_kuliah(ID_matkul, ID_dosen, NIM, nilai_mahasiswa) values("H001", "D002", "M004", "A");
insert into kontrak_kuliah(ID_matkul, ID_dosen, NIM, nilai_mahasiswa) values("S001", "D001", "M005", "A");
insert into kontrak_kuliah(ID_matkul, ID_dosen, NIM, nilai_mahasiswa) values("Q001", "D003", "M006", "C");

// soal 3tampilkan nilai b keatas 
select nama, nilai_mahasiswa from mahasiswa left join kontrak_kuliah USING(NIM) where nilai_mahasiswa like '%B%' OR nilai_mahasiswa like'%A%';
// soal 5 memilih mahasiswa yg mengambil matkul mustolah
select mahasiswa.nama, matkul.nama_matkul from mahasiswa join kontrak_kuliah on mahasiswa.NIM=kontrak_kuliah.NIM inner join matkul on matkul.ID_matkul=kontrak_kuliah.ID_matkul where nama_matkul="mustolah hadist";
// soal 6 tampilkan jumlah mahasiswa setiap dosen 
select dosen.nama_dosen, count(distinct mahasiswa.NIM) as banyak_mahasiswa from mahasiswa join kontrak_kuliah on mahasiswa.NIM=kontrak_kuliah.NIM inner join dosen on dosen.ID_dosen=kontrak_kuliah.ID_dosen group by nama_dosen;
// soal 4 tampilkan jumlah sks yg diambil 
select mahasiswa.nama, sum(jumlah_sks) as banyak_sks from mahasiswa join kontrak_kuliah on mahasiswa.NIM=kontrak_kuliah.NIM inner join matkul on matkul.ID_matkul=kontrak_kuliah.ID_matkul group by mahasiswa.nama;
//soal 7 urutkan nama mahasiswa berdarsarkan usia 
select * from mahasiswa order by usia;
// soal 8 
select mahasiswa.NIM, mahasiswa.nama, mahasiswa.madzhab, mahasiswa.usia, mahasiswa.email, jurusan.nama_jurusan, matkul.nama_matkul, kontrak_kuliah.nilai_mahasiswa, dosen.ID_dosen, dosen.nama_dosen from mahasiswa join kontrak_kuliah on mahasiswa.NIM=kontrak_kuliah.NIM join dosen on dosen.ID_dosen=kontrak_kuliah.ID_dosen inner join matkul on matkul.ID_matkul=kontrak_kuliah.ID_matkul  join jurusan on jurusan.ID_jurusan=mahasiswa.ID_jurusan where nilai_mahasiswa like '%C%' OR nilai_mahasiswa like'%D%';