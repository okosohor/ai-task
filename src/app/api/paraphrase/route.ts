import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { text } = body;

  if (!text || typeof text !== 'string') {
    return NextResponse.json(
      { error: 'Please enter correct value' },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(
      `${process.env.BASE_OPEN_AI_URL}/v1/chat/completions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: `Paraphrase: ${text}` }],
        }),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error?.message || 'OpenAi error');
    }

    const result = data.choices[0].message.content.trim();
    return NextResponse.json({ result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
