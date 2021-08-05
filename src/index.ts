import express from "express";
import Twitter from "twitter";
import {
  customerKey,
  customerSeacret,
  accsessTokenKey,
  accsessTokenSeacret,
} from "../seacretDirectory/seacret";

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  }
);

// 型定義
type Message = {
  message: string;
};
type Params = {
  status: string;
};

const client: Twitter = new Twitter({
  consumer_key: customerKey(),
  consumer_secret: customerSeacret(),
  access_token_key: accsessTokenKey(),
  access_token_secret: accsessTokenSeacret(),
});

const message: Message = {
  message: "Bad Request",
};

// --------------------------------------------
// -----------------<<main>>------------------
// ------------------------------------------

//get
app.get("/api", (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(message));
});

//post
app.post("/api", (req: express.Request, res: express.Response) => {
  const detail_id = req.query.id;
  if (detail_id === "") {
    res.send(JSON.stringify(message));
  } else {
    const params: Params = {
      status:
        "以下のものを作成しました。\n" +
        "詳しくは下記サイトへ。\n" +
        "https://watataku-portfolio.web.app/works/detail/" +
        detail_id +
        "/page/1/categoryId/0",
    };

    client.post("statuses/update", params, (tweet: Twitter.ResponseData) => {
      if (tweet) {
        res.json(tweet);
      } else {
        res.json("ツイートできませんでした。");
      }
    });
  }
});

//put
app.put("/api", (req: express.Request, res: express.Response) => {
  const detail_id = req.query.id;
  if (detail_id === "") {
    res.send(JSON.stringify(message));
  } else {
    const params: Params = {
      status:
        "以下のものを作成しました。\n" +
        "詳しくは下記サイトへ。\n" +
        "https://watataku-portfolio.web.app/works/detail/" +
        detail_id +
        "/page/1/categoryId/0",
    };

    client.post("statuses/update", params, (tweet: Twitter.ResponseData) => {
      if (tweet) {
        res.json(tweet);
      } else {
        res.json("ツイートできませんでした。");
      }
    });
  }
});

//delete
app.delete("/api", (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(message));
});

const port: string | number = process.env.PORT || 8080;
app.listen(port);
console.log("ポート番号" + port + "でWebサーバが立ち上がりました");
