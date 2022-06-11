sqlite3 universitas.db
 create table mahasiswa(NIM varchar(10) primary key not null, nama varchar(10) not null, email varchar(10), madzhab varchar(10),ID_jurusan varchar(15));
 create table jurusan(ID_jurusan varchar(15) primary key not null, nama_jurusan varchar(20));
 create table matkul(ID_matkul varchar(10) primary key not null, nama_matkul varchar(20), jumlah_sks int not null);
 create table dosen(ID_dosen varchar(10), primary key not null, nama_dosen varchar(10) not null);
 create table kontrak_kuliah(angka INTEGER primary key AUTOINCREMENT, ID_matkul varchar(5) not null, ID_dosen varchar(10) not null, NIM varchar(10) not null, nilai_mahasiswa varchar(3) );
------------------------------

insert into mahasiswa (NIM, nama, email, madzhab, ID_jurusan) values ("M001", "Wildan Ismail", "wildan@gmail.com", "hambali","Hadist02");
insert into mahasiswa(NIM, nama, email, madzhab,ID_jurusan) values("M002", "Boby", "boby@yaho.co.id", "hanafi", "Syariah01");
insert into mahasiswa(NIM, nama, ID_jurusan ) values("M003", "Syahid", "Tafsir03");
--------------
insert into jurusan(ID_jurusan, nama_jurusan) values ("Hadist02", "hadist");
insert into jurusan(ID_jurusan, nama_jurusan) values ("Syariah01", "syariah");
insert into jurusan(ID_jurusan, nama_jurusan) values ("Tafsir03", "Tafsir");
-------
insert into matkul(ID_matkul, nama_matkul, jumlah_sks ) values ("H001", "mustolah hadist", 3);
insert into matkul(ID_matkul, nama_matkul, jumlah_sks ) values ("S001", "fiqh", 2);
insert into matkul(ID_matkul, nama_matkul, jumlah_sks ) values ("Q001", "ulumul quran", 4);
-------

insert into dosen(ID_dosen, nama_dosen) values ("D001", "Hilmi.Lc");
insert into dosen(ID_dosen, nama_dosen) values ("D003", "Wildan.Lc.Ma");
insert into dosen(ID_dosen, nama_dosen) values ("D002", "Dr.Rizky.Ma");

----- 
insert into kontrak_kuliah(Id_matkul,ID_dosen, NIM, nilai_mahasiswa ) values ( "H001", "D001","M001", "A+");
 insert into kontrak_kuliah(Id_matkul,ID_dosen, NIM, nilai_mahasiswa ) values ( "H001", "D003","M002", "B+");
 insert into kontrak_kuliah(Id_matkul,ID_dosen, NIM, nilai_mahasiswa ) values ( "S001", "D001","M001", "C-");