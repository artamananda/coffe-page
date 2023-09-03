# Case Solution

## Case 1 (Soal No.1-4)

Andi menjual beraneka ragam buah. Diketahui catatan buah yang dimiliki Andi saat ini adalah sebagai berikut.

```typescript
type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: 'IMPORT' | 'LOCAL';
  stock: number;
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
  },
];
```

1. Buah apa saja yang dimiliki Andi? (fruitName)

```
Apel, Kurma, apel, Manggis, Jeruk Bali, KURMA, Salak
```

2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
   masing-masing wadah?

```
2 Wadah. LOCAL dan IMPORT.
IMPORT : Apel, Kurma, apel, KURMA
LOCAL  : Manggis, Jeruk Bali, Salak
```

3. Berapa total stock buah yang ada di masing-masing wadah?

```
IMPORT : Apel, Kurma, apel, KURMA
       = 10 + 20 + 50 + 20 = 100

LOCAL  : Manggis, Jeruk Bali, Salak
       = 100 + 10 + 150 = 260
```

4. Apakah ada komentar terkait kasus di atas?

```
1. Terdapat inkonsistensi pada penamaan buah, yaitu seperti Apel dan apel. Lalu ada juga KURMA dan Kurma. Yang mana sebenarnya dalam pandangan kita sebagai manusia itu sama, namun komputer bisa lain memahaminya karena adanya perbedaan penggunaan huruf besar dan kecil pada penamaan.

2. ID yang digunakan pada Apel dan apel berbeda sehingga bisa disimpulkan bahwa 2 buah ini adalah 2 yang berbeda, begitu juga dengan KURMA dan Kurma.

3. Terdapat 3 buah dengan ID yang sama. Tentu ini bisa mempengaruhi saat kita ingin melakukan getDataByID. Karena pada umumnya ID itu harus bersifat unique.
```

## Case 2 (Soal No.5)

Diketahui data berikut ini.

```typescript
type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa',
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: 'Halooo',
  },
];
```

5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
   balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

```typescript
function countTotalComments(comments: IComment[]): number {
  let total = comments.length;

  for (const comment of comments) {
    if (comment.replies) {
      total += countTotalComments(comment.replies);
    }
  }

  return total;
}
```

## Case 3

6. Buatlah minimal 1 halaman untuk memperkenalkan sebuah UMKM. Desain bebas. Buatlah semenarik mungkin. Boleh dibuat sebagai website ataupun mobile app (bebas pilih). Jika diperlukan, diperbolehkan untuk membuat backend sederhana.

```
npm start
```

Running on :

```
http://localhost:3000
```
